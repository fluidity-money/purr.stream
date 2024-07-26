// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import {Test} from "forge-std/Test.sol";

import {Donation} from "../pkg/Donation.sol";

contract DonationTest is Test {
    Donation public donation;

    address internal addrOperator;
    address internal addrSender;

    bytes8 constant CAT_1 = 0x0000000000000001;
    bytes8 constant CAT_2 = 0x0000000000000002;

    function setUp() public {
        addrOperator = vm.addr(0xA11CE);
        addrSender = vm.addr(0xB0B);
        donation = new Donation();
        donation.init(addrOperator);
    }

    function testMakeDonation() public {
        vm.startPrank(addrSender);
        //donation.makeDonation(CAT_1, 10000);
        //donation.makeDonation(CAT_2, 40000);
    }
}
