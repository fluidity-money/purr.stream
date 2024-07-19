// SPDX-Identifier: MIT

pragma solidity 0.8.16;

interface IDonationView {
    /**
     * @notice Donation made by a user.
     */
    struct Donation {
        /// @notice cat that was donated to (keccak of it's details, trimmed)
        bytes8 cat;
        /// @notice amount donated by the user during this period.
        uint128 amount;
    }

    /**
     * @notice leaderboard state that's current.
     * @param length to show to the user
     * @return the current donation state for the cats
     */
    function leaderboard(uint length) external returns (Donation[] memory);
}

interface IDonationMaker {
    /**
     * @notice makeDonation to the cat given from the amount the user has.
     * @param cat to donate to, keccak hashed. Trimmed.
     * @param amount to donate.
     */
    function makeDonation(bytes8 cat, uint256 amount) external;

    /**
     * @notice return amounts accumulated that are eligible to be returned to the user.
     * @dev Amounts are able to be redeemed once the leaderboard crank has been called.
     */
    function returnDonation() external returns (uint256 amountReturned);
}

interface IDonationAdmin {
    /**
     * @notice takeSnapshot, updating the weekly leaderboard for display.
     *  @dev Internally updates the leaderboard states. Flags every position that was
     *       created as eligible to be redeemed.
     * @dev Operator only.
     */
    function takeSnapshot() external;
}

interface IDonation is IDonationView, IDonationMaker, IDonationAdmin {}
