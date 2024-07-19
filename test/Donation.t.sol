// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import {Test} from "forge-std/Test.sol";

import {TestERC20} from "./TestERC20.sol";
import {Donation} from "../pkg/Donation.sol";

contract DonationTest is Test {
    Donation public donation;
    TestERC20 internal erc20;

    address internal addrOperator;
    address internal addrSender;

    bytes8 constant CAT_1 = 0x0000000000000001;
    bytes8 constant CAT_2 = 0x0000000000000002;

    function setUp() public {
        addrOperator = vm.addr(0xA11CE);
        addrSender = vm.addr(0xB0B);
        erc20 = new TestERC20();
        donation = new Donation();
        donation.init(addrOperator, address(erc20));
        erc20.transfer(addrSender, type(uint256).max);
    }

    function testMakeDonation() public {
        vm.startPrank(addrSender);
        erc20.approve(address(donation), type(uint256).max);
        donation.makeDonation(CAT_1, 10000);
        assertEq(donation.leaderboardCats_(0), CAT_1);
        donation.makeDonation(CAT_1, 20000);
        donation.makeDonation(CAT_2, 40000);
        assertEq(donation.leaderboardCats_(0), CAT_2);
    }
}
