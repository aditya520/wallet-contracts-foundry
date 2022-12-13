"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IModuleCalls__factory = void 0;
var ethers_1 = require("ethers");
var IModuleCalls__factory = /** @class */ (function () {
    function IModuleCalls__factory() {
    }
    IModuleCalls__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IModuleCalls__factory;
}());
exports.IModuleCalls__factory = IModuleCalls__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_newNonce",
                type: "uint256"
            },
        ],
        name: "NonceChange",
        type: "event"
    },
    {
        anonymous: true,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "_tx",
                type: "bytes32"
            },
        ],
        name: "TxExecuted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "_tx",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_reason",
                type: "bytes"
            },
        ],
        name: "TxFailed",
        type: "event"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "delegateCall",
                        type: "bool"
                    },
                    {
                        internalType: "bool",
                        name: "revertOnError",
                        type: "bool"
                    },
                    {
                        internalType: "uint256",
                        name: "gasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "target",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    },
                ],
                internalType: "struct IModuleCalls.Transaction[]",
                name: "_txs",
                type: "tuple[]"
            },
            {
                internalType: "uint256",
                name: "_nonce",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "nonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
        ],
        name: "readNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "delegateCall",
                        type: "bool"
                    },
                    {
                        internalType: "bool",
                        name: "revertOnError",
                        type: "bool"
                    },
                    {
                        internalType: "uint256",
                        name: "gasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "target",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    },
                ],
                internalType: "struct IModuleCalls.Transaction[]",
                name: "_txs",
                type: "tuple[]"
            },
        ],
        name: "selfExecute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
