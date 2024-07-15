// SPDX-Identifier: MIT

pragma solidity 0.8.16;

interface IDonation is IDonationViewer, IDonationMaker, IDonationAdmin {}

interface IDonationView {
    struct Donation {
        address user;
        uint256 amount;
    }

    /**
     * @notice leaderboard state that's current.
     * @param maximum amount to show the user
     * @return the state
     */
    function leaderboard(uint length) external return (Donation[] memory);
}

interface IDonationMaker {
    /**
     * @notice makeDonation to the cat given from the amount the user has.
     * @param cat to donate to, keccak hashed.
     * @param amount to donate.
     * @dev internally updates the leaderboard state.
     */
    function makeDonation(bytes32 cat, uint256 amount) external;
}

interface IDonationAdmin {
    /**
     * @notice takeSnapshot, updating the weekly leaderboard for display
     * @dev Operator only.
     */
    function takeSnapshot() external;
}
