// SPDX-Identifier: MIT

pragma solidity 0.8.16;

interface IDonationView {
    /**
     * @notice get the amount of spn donated to a specific cat.
     * @param cat to show.
     * @return the current donation amount for the cat given.
     */
    function get(bytes8 cat) external view returns (uint256);

    /**
     * @notice wallet amount donated
     * @param wallet to get the amount donated for.
     * @return the amount
     */
    function wallet(address wallet) external view returns (uint256);

    /**
     * @notice walletCount that interacted with this cat.
     * @param cat to use.
     * @return amount of wallets that interacted with this cat during the leaderboard window.
     */
    function walletCount(bytes8 cat) external view returns (uint256);
}

interface IDonationMaker {
    /**
     * @notice makeDonation to the cat given from the amount the user has.
     * @param cat to donate to, keccak hashed. Trimmed.
     */
    function makeDonation(bytes8 cat) external payable;
}

interface IDonationAdmin {
    /**
     * @notice reset the state internally.
     * @dev Operator only.
     */
    function reset() external;
}

interface IDonation is IDonationView, IDonationMaker, IDonationAdmin {
    event Donated(
        bytes8 indexed cat,
        address indexed donater,
        uint256 indexed amount
    );

    event DonationsDrained(uint256 amount);
}
