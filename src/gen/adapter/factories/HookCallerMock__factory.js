"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HookCallerMock__factory = void 0;
var ethers_1 = require("ethers");
var HookCallerMock__factory = /** @class */ (function (_super) {
    __extends(HookCallerMock__factory, _super);
    function HookCallerMock__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    HookCallerMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    HookCallerMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    HookCallerMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    HookCallerMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    HookCallerMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return HookCallerMock__factory;
}(ethers_1.ContractFactory));
exports.HookCallerMock__factory = HookCallerMock__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "callERC1155BatchReceived",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "callERC1155Received",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "callERC1271isValidSignatureData",
        outputs: [],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "callERC1271isValidSignatureHash",
        outputs: [],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "callERC223Received",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "callERC721Received",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610dfe806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80636d1d4996116100505780636d1d4996146101715780637510d9ec146101a4578063bf900e2c146101d757610072565b806326b5a86a146100775780632a201004146100ac5780635b6571511461013e575b600080fd5b6100aa6004803603602081101561008d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102b6565b005b6100aa600480360360608110156100c257600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135918101906060810160408201356401000000008111156100ff57600080fd5b82018360208201111561011157600080fd5b8035906020019184600183028401116401000000008311171561013357600080fd5b5090925090506105b9565b6100aa6004803603602081101561015457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661072d565b6100aa6004803603602081101561018757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107ee565b6100aa600480360360208110156101ba57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661098a565b6100aa600480360360608110156101ed57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561022557600080fd5b82018360208201111561023757600080fd5b8035906020019184600183028401116401000000008311171561025957600080fd5b91939092909160208101903564010000000081111561027757600080fd5b82018360208201111561028957600080fd5b803590602001918460018302840111640100000000831117156102ab57600080fd5b509092509050610b19565b60408051600380825260808201909252600091602082016060803683370190505090506001816000815181106102e857fe5b60200260200101818152505060028160018151811061030357fe5b60200260200101818152505060038160028151811061031e57fe5b60209081029190910101526040805160038082526080820190925260009181602001602082028036833701905050905060c88160008151811061035d57fe5b60200260200101818152505061012c8160018151811061037957fe5b6020026020010181815250506101908160028151811061039557fe5b60200260200101818152505060008373ffffffffffffffffffffffffffffffffffffffff1663bc197c81303386866000366040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845288818151815260200191508051906020019060200280838360005b8381101561045557818101518382015260200161043d565b50505050905001848103835287818151815260200191508051906020019060200280838360005b8381101561049457818101518382015260200161047c565b505050509050018481038252868682818152602001925080828437600081840152601f19601f8201169050808301925050509950505050505050505050602060405180830381600087803b1580156104eb57600080fd5b505af11580156104ff573d6000803e3d6000fd5b505050506040513d602081101561051557600080fd5b505190507fbc197c81000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216146105b3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180610d926037913960400191505060405180910390fd5b50505050565b60008473ffffffffffffffffffffffffffffffffffffffff16631626ba7e8585856040518463ffffffff1660e01b815260040180848152602001806020018281038252848482818152602001925080828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b15801561065e57600080fd5b505afa158015610672573d6000803e3d6000fd5b505050506040513d602081101561068857600080fd5b505190507f1626ba7e000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821614610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e815260200180610d54603e913960400191505060405180910390fd5b5050505050565b6040517fc0ee0b8a0000000000000000000000000000000000000000000000000000000081523360048201818152600160248401819052606060448501908152366064860181905273ffffffffffffffffffffffffffffffffffffffff87169563c0ee0b8a95946000939091608401848480828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b1580156107da57600080fd5b505af1158015610726573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663f23a6e613033600160026000366040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050975050505050505050602060405180830381600087803b1580156108be57600080fd5b505af11580156108d2573d6000803e3d6000fd5b505050506040513d60208110156108e857600080fd5b505190507ff23a6e61000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821614610986576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610d226032913960400191505060405180910390fd5b5050565b60008173ffffffffffffffffffffffffffffffffffffffff1663150b7a02303360016000366040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050602060405180830381600087803b158015610a5157600080fd5b505af1158015610a65573d6000803e3d6000fd5b505050506040513d6020811015610a7b57600080fd5b505190507f150b7a02000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821614610986576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180610cf16031913960400191505060405180910390fd5b60008573ffffffffffffffffffffffffffffffffffffffff166320c13b0b868686866040518563ffffffff1660e01b81526004018080602001806020018381038352878782818152602001925080828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600081840152601f19601f820116905080830192505050965050505050505060206040518083038186803b158015610be257600080fd5b505afa158015610bf6573d6000803e3d6000fd5b505050506040513d6020811015610c0c57600080fd5b505190507f20c13b0b000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821614610caa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e815260200180610cb3603e913960400191505060405180910390fd5b50505050505056fe486f6f6b43616c6c65724d6f636b2363616c6c45524331323731697356616c69645369676e6174757265446174613a20494e56414c49445f52455455524e486f6f6b43616c6c65724d6f636b2363616c6c45524337323152656365697665643a20494e56414c49445f52455455524e486f6f6b43616c6c65724d6f636b2363616c6c4552433131353552656365697665643a20494e56414c49445f52455455524e486f6f6b43616c6c65724d6f636b2363616c6c45524331323731697356616c69645369676e6174757265486173683a20494e56414c49445f52455455524e486f6f6b43616c6c65724d6f636b2363616c6c45524331313535426174636852656365697665643a20494e56414c49445f52455455524ea26469706673582212201fc224e57063e05b15e2a63a01658a26dcf0e7850159fc60a0bc575b66374fd964736f6c63430007060033";
