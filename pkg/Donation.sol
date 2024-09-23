// SPDX-Identifier: MIT
pragma solidity 0.8.16;

import {
    IDonation,
    IDonationMaker,
    IDonationAdmin,
    IDonationView} from "./IDonation.sol";

contract Donation is IDonation {
    uint256 constant private MIN_DONATION = 0;

    uint8 private version_;

    /**
     * @notice operator_ is able to call the leaderboard crank.
     */
    address private operator_;

    /**
     * @notice __unused
     */
    address private __unused;

    /**
     * @notice donationEpoch_ that we're currently up to. Used to know
     *         whether the latest item in the positions arrays is
     *         current.
     */
    uint128 donationEpoch_;

    /**
     * @notice positions_ donated to a cat by each user.
     */
    mapping (address => uint256) private positions_;

    /**
     * @notice cats_ invested in by users. Epoch => cat => amount.
     */
    mapping (uint => mapping(bytes8 => uint256)) private cats_;

    /**
     * @notice catWallets_ count of the number that donated to the cat.
     */
    mapping (uint => mapping(bytes8 => uint256)) private catWallets_;

    /* SETUP FUNCTIONS */

    function init(address _operator) external {
        require(version_ == 0, "initialised");
        operator_ = _operator;
        version_ = 1;
    }

    /* DONATION VIEWER */

    /// @inheritdoc IDonationView
    function get(bytes8 _cat) external view returns (uint256) {
        return cats_[donationEpoch_][_cat];
    }

    /// @inheritdoc IDonationView
    function wallet(address _wallet) external view returns (uint256) {
        return positions_[_wallet];
    }

    /// @inheritdoc IDonationView
    function walletCount(bytes8 _cat) external view returns (uint256) {
        return catWallets_[donationEpoch_][_cat];
    }

    /* DONATION MAKER */

    /// @inheritdoc IDonationMaker
    function makeDonation(bytes8 _cat) external payable {
        require(msg.value > MIN_DONATION, "min amount needed");
        if (positions_[msg.sender] == 0) {
            catWallets_[donationEpoch_][_cat]++;
        }
        positions_[msg.sender] += msg.value;
        cats_[donationEpoch_][_cat] += msg.value;
        emit Donated(_cat, msg.sender, msg.value);
    }

    /* ADMIN  FUNCTIONS */

    /// @inheritdoc IDonationAdmin
    function reset() external {
        require(msg.sender == operator_, "only operator");
        donationEpoch_++;
    }

    function take() external {
        require(msg.sender == operator_, "only operator");
        uint256 bal = address(this).balance;
        (bool rc,) = payable(operator_).call{value: bal}("");
        assert(rc);
        emit DonationsDrained(bal);
    }

    /**
     * @notice updateOperator, with some controls for consistency with forking.
     * @param _old operator to use.
     * @param _new operator to replace it with.
     */
    function updateOperator(address _old, address _new) external {
        require(msg.sender == operator_, "only operator");
        require(operator_ == _old, "inconsistent");
        operator_ = _new;
    }
}
