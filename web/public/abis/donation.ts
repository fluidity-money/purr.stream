
export const abi = [
  {
    type: "function",
    name: "get",
    inputs: [{ name: "_cat", type: "bytes8", internalType: "bytes8" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "init",
    inputs: [{ name: "_operator", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "makeDonation",
    inputs: [{ name: "_cat", type: "bytes8", internalType: "bytes8" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "reset",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateOperator",
    inputs: [
      { name: "_old", type: "address", internalType: "address" },
      { name: "_new", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "walletCount",
    inputs: [{ name: "_cat", type: "bytes8", internalType: "bytes8" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Donated",
    inputs: [
      { name: "cat", type: "bytes8", indexed: true, internalType: "bytes8" },
      {
        name: "donater",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;
