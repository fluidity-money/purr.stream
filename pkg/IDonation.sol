// SPDX-Identifier: MIT

pragma solidity 0.8.16;

interface IDonationView {
    /**
     * @notice get a cat amount donated.
     * @param cat to show.
     * @return the current donation amount for the cat given.
     */
    function get(bytes8 cat) external view returns (uint256);
}

interface IDonationMaker {
    /**
     * @notice makeDonation to the cat given from the amount the user has.
     * @param cat to donate to, keccak hashed. Trimmed.
     * @param amount to donate.
     */
    function makeDonation(bytes8 cat, uint256 amount) external;
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
}
