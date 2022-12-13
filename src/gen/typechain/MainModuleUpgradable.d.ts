/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MainModuleUpgradableInterface extends ethers.utils.Interface {
  functions: {
    "addHook(bytes4,address)": FunctionFragment;
    "createContract(bytes)": FunctionFragment;
    "execute(tuple[],uint256,bytes)": FunctionFragment;
    "imageHash()": FunctionFragment;
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "nonce()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "readHook(bytes4)": FunctionFragment;
    "readNonce(uint256)": FunctionFragment;
    "removeHook(bytes4)": FunctionFragment;
    "selfExecute(tuple[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateImageHash(bytes32)": FunctionFragment;
    "updateImplementation(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addHook",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createContract",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "imageHash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "readHook", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "readNonce",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeHook",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selfExecute",
    values: [
      {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateImageHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateImplementation",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "imageHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "readHook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selfExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateImageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateImplementation",
    data: BytesLike
  ): Result;

  events: {
    "CreatedContract(address)": EventFragment;
    "ImageHashUpdated(bytes32)": EventFragment;
    "ImplementationUpdated(address)": EventFragment;
    "NonceChange(uint256,uint256)": EventFragment;
    "TxExecuted(bytes32)": EventFragment;
    "TxFailed(bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatedContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImageHashUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImplementationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NonceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxFailed"): EventFragment;
}

export class MainModuleUpgradable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MainModuleUpgradableInterface;

  functions: {
    addHook(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addHook(bytes4,address)"(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createContract(
      _code: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createContract(bytes)"(
      _code: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "execute(tuple[],uint256,bytes)"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    imageHash(overrides?: CallOverrides): Promise<[string]>;

    "imageHash()"(overrides?: CallOverrides): Promise<[string]>;

    "isValidSignature(bytes32,bytes)"(
      _hash: BytesLike,
      _signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "isValidSignature(bytes,bytes)"(
      _data: BytesLike,
      _signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nonce()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    readHook(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "readHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "readNonce(uint256)"(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeHook(
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeHook(bytes4)"(
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "selfExecute(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateImageHash(
      _imageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateImageHash(bytes32)"(
      _imageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateImplementation(
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateImplementation(address)"(
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addHook(
    _signature: BytesLike,
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addHook(bytes4,address)"(
    _signature: BytesLike,
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createContract(
    _code: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createContract(bytes)"(
    _code: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    _nonce: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "execute(tuple[],uint256,bytes)"(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    _nonce: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  imageHash(overrides?: CallOverrides): Promise<string>;

  "imageHash()"(overrides?: CallOverrides): Promise<string>;

  "isValidSignature(bytes32,bytes)"(
    _hash: BytesLike,
    _signatures: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "isValidSignature(bytes,bytes)"(
    _data: BytesLike,
    _signatures: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  "nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  readHook(_signature: BytesLike, overrides?: CallOverrides): Promise<string>;

  "readHook(bytes4)"(
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  readNonce(
    _space: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "readNonce(uint256)"(
    _space: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeHook(
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeHook(bytes4)"(
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  selfExecute(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "selfExecute(tuple[])"(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateImageHash(
    _imageHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateImageHash(bytes32)"(
    _imageHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateImplementation(
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateImplementation(address)"(
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addHook(
      _signature: BytesLike,
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addHook(bytes4,address)"(
      _signature: BytesLike,
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createContract(
      _code: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "createContract(bytes)"(
      _code: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "execute(tuple[],uint256,bytes)"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    imageHash(overrides?: CallOverrides): Promise<string>;

    "imageHash()"(overrides?: CallOverrides): Promise<string>;

    "isValidSignature(bytes32,bytes)"(
      _hash: BytesLike,
      _signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "isValidSignature(bytes,bytes)"(
      _data: BytesLike,
      _signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    "nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    readHook(_signature: BytesLike, overrides?: CallOverrides): Promise<string>;

    "readHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readNonce(uint256)"(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeHook(_signature: BytesLike, overrides?: CallOverrides): Promise<void>;

    "removeHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "selfExecute(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateImageHash(
      _imageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateImageHash(bytes32)"(
      _imageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updateImplementation(
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateImplementation(address)"(
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CreatedContract(
      _contract: null
    ): TypedEventFilter<[string], { _contract: string }>;

    ImageHashUpdated(
      newImageHash: null
    ): TypedEventFilter<[string], { newImageHash: string }>;

    ImplementationUpdated(
      newImplementation: null
    ): TypedEventFilter<[string], { newImplementation: string }>;

    NonceChange(
      _space: null,
      _newNonce: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _space: BigNumber; _newNonce: BigNumber }
    >;

    TxExecuted(_tx: null): TypedEventFilter<[string], { _tx: string }>;

    TxFailed(
      _tx: null,
      _reason: null
    ): TypedEventFilter<[string, string], { _tx: string; _reason: string }>;
  };

  estimateGas: {
    addHook(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addHook(bytes4,address)"(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createContract(
      _code: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createContract(bytes)"(
      _code: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "execute(tuple[],uint256,bytes)"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    imageHash(overrides?: CallOverrides): Promise<BigNumber>;

    "imageHash()"(overrides?: CallOverrides): Promise<BigNumber>;

    "isValidSignature(bytes32,bytes)"(
      _hash: BytesLike,
      _signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidSignature(bytes,bytes)"(
      _data: BytesLike,
      _signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    "nonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    readHook(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readNonce(uint256)"(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeHook(
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeHook(bytes4)"(
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "selfExecute(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateImageHash(
      _imageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateImageHash(bytes32)"(
      _imageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateImplementation(
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateImplementation(address)"(
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addHook(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addHook(bytes4,address)"(
      _signature: BytesLike,
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createContract(
      _code: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createContract(bytes)"(
      _code: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "execute(tuple[],uint256,bytes)"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    imageHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "imageHash()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isValidSignature(bytes32,bytes)"(
      _hash: BytesLike,
      _signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidSignature(bytes,bytes)"(
      _data: BytesLike,
      _signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    readHook(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readHook(bytes4)"(
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readNonce(uint256)"(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeHook(
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeHook(bytes4)"(
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "selfExecute(tuple[])"(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateImageHash(
      _imageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateImageHash(bytes32)"(
      _imageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateImplementation(
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateImplementation(address)"(
      _implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
