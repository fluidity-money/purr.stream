// SPDX-Identifier: MIT
pragma solidity 0.8.16;

import {
    IDonation,
    IDonationMaker,
    IDonationAdmin,
    IDonationView} from "./IDonation.sol";

interface IERC20 {
    function transferFrom(address _sender, address _recipient, uint256 _amount) external;
}

contract Donation is IDonation {
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
    mapping (address => uint256) private positions_;

    /**
     * @notice cats_ invested in by users. Epoch => cat => amount.
     */
    mapping (uint => mapping(bytes8 => uint256)) private cats_;

    /* SETUP FUNCTIONS */

    function init(address _operator, address _erc20) external {
        require(version_ == 0, "initialised");
        operator_ = _operator;
        wspn_ = IERC20(_erc20);
        version_ = 1;
    }

    /* OPERATOR FUNCTIONS */

    /// @inheritdoc IDonationAdmin
    function reset() external {
        require(msg.sender == operator_, "only operator");
        donationEpoch_++;
    }

    /* USER FUNCTIONS */

    /// @inheritdoc IDonationView
    function get(bytes8 _cat) external view returns (uint256) {
        return cats_[donationEpoch_][_cat];
    }

    /// @inheritdoc IDonationMaker
    function makeDonation(bytes8 _cat, uint256 _amount) external {
        require(_amount > MIN_DONATION, "min amount needed");
        wspn_.transferFrom(msg.sender, address(this), _amount);
        positions_[msg.sender] += _amount;
        cats_[donationEpoch_][_cat] += _amount;
        emit Donated(_cat, msg.sender, _amount);
    }
}
