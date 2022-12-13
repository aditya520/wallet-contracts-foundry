/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IModuleHooks } from "../IModuleHooks";

export class IModuleHooks__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IModuleHooks {
    return new Contract(address, _abi, signerOrProvider) as IModuleHooks;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "addHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "readHook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "removeHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
