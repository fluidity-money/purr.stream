// SPDX-Identifier: MIT
pragma solidity 0.8.16;

import {IDonation} from "./IDonation.sol";

interface IERC20 {
    function transferFrom(address _sender, address _recipient, uint256 _amount) external;
}

/**
 * @notice Position created by a user. Tracks their position in the donations array.
 */
struct Position {
    uint128 position;
    uint128 donated;
}

contract Donation {
    uint256 constant private MIN_DONATION = 0;

    uint8 private version_;

    /**
     * @notice operator_ is able to call the leaderboard crank.
     */
    address private operator_;

    /**
     * @notice wspn to take from the user for transferring.
     */
    IERC20 private wspn_;

    /**
     * @notice donationEpoch_ that we're currently up to. Used to know
     *         whether the latest item in the positions arrays is
     *         current.
     */
    uint128 donationEpoch_;

    /**
     * @notice positions_ held by the user. The latest element in the array is the
     *         deposited amounts for the current epoch.
     */
    mapping (address => mapping(uint => Position)) positions_;

    /**
     * @notice cats_ invested in by users. Follows the same UX as the positions_
     * array.
     */
    mapping (bytes8 => mapping(uint => Position)) private cats_;

    mapping (bytes8 => uint) private catsLength_;

    /**
     * @notice leaderboardCats_ that's available to rank the cats.
     */
    bytes8[] public leaderboardCats_;

    /* SETUP FUNCTIONS */

    function init(address _operator, address _erc20) external {
        require(version_ == 0, "initialised");
        operator_ = _operator;
        wspn_ = IERC20(_erc20);
        // If we set the donation epoch to 1, then we force everyone to
        // start from scratch the first time.
        donationEpoch_ = 1;
    }

    /* OPERATOR FUNCTIONS */

    function takeSnapshot() external {
        require(msg.sender == operator_, "only operator");
        donationEpoch_++;
    }

    /* USER FUNCTIONS */

    function makeDonation(bytes8 _cat, uint128 _amount) external {
        // Take a donation from a user by increasing the donations tracked for
        // them to the current epoch, doing the same for the cat of their choice,
        // and increasing the amount tracked as donated to the cat of their
        // choosing. Then compare the cat of their choosing's position compared
        // to its leftmost neighbour, shuffling them around if it's needed. Also
        // do the same to the user's position.

        // First, check if the arrays lengths are max uint128, and if they are, then flag it with a
        // revert (we were griefed and need an upgrade or something.)
        require(leaderboardCats_.length != uint(type(uint128).max), "cats griefed");

        require(_amount > MIN_DONATION, "amount is 0");
        require(_cat != bytes8(0), "empty cat");

        // Keep the cat's position updated to the current epoch.
        if (catsLength_[_cat] != donationEpoch_) {
            catsLength_[_cat] = donationEpoch_;
            cats_[_cat][donationEpoch_].position = type(uint128).max;
        }

        wspn_.transferFrom(msg.sender, address(this), _amount);

        // Increase the user's tracked amount.
        positions_[msg.sender][donationEpoch_].donated += _amount;
        cats_[_cat][donationEpoch_].donated += _amount;

        // If the cat's position in the leaderboard is max uint128, then we
        // assume they don't exist, and start searching again. We reuse the startCursor here.
        Position storage position = cats_[_cat][donationEpoch_];
        uint startCursor = position.position;
        uint128 donated = position.donated;

        if (startCursor == type(uint128).max) {
            if (leaderboardCats_.length == 0) {
                leaderboardCats_.push(_cat);
                return;
            }
            else startCursor = leaderboardCats_.length-1;
        }

        // Start at rightmost of the array, and start to work our way backwards.
        for (uint i = startCursor; i >= 0; --i) {
            // Compare the value under the current cursor with the user's accumulated donation.
            Position storage swapping = cats_[leaderboardCats_[i]][donationEpoch_];
            if (donated > swapping.donated) {
                // If we're larger, swap the current position with the last position. Since we're
                // progressively moving our way through this array, doing this a lot should be safe,
                // since we can assume noone will have 0. Hopefully gradually this will eventually
                // be ordered and will only be expensive the first time.
                if (i+1 == leaderboardCats_.length) {
                    leaderboardCats_.push(_cat); // Pad out the array for the final swap.
                }
                bytes8 last = leaderboardCats_[i+1];
                bytes8 current = leaderboardCats_[i];
                leaderboardCats_[i] = last;
                leaderboardCats_[i+1] = current;
                if (i == 0) break;
            } else {
                // We're done doing a sort from right to left. Time
                // to update the user with the current position, and
                // bail out.
                swapping.position = uint128(i);
                break;
            }
        }
    }
}
