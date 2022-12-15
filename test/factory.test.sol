pragma solidity 0.7.6;

import "forge-std/Test.sol";
import "../src/contracts/Factory.sol";
import "../src/contracts/modules/MainModule.sol";
import "../src/contracts/utils/LibAddress.sol";
import {console} from "forge-std/console.sol";

contract FactoryTest is Test {
    using LibAddress for address;
    Factory factory;
    MainModule mainModule;
    bytes32 imageHash = "DefaultImageHash";

    function setUp() public {
        factory = new Factory();
        mainModule = new MainModule(address(factory));
    }

    // Should Deploy Wallet
    function testDeployWallet() public {
        factory.deploy(address(mainModule), imageHash);
    }

    // Should Predict Wallet Address
    function testShouldPredictWalletAddress() public {
        address predict = addressOf(
            address(factory),
            address(mainModule),
            imageHash
        );

        console.log("Predicted Address: %s", predict);
        console.log("Factory address: %s", address(factory));
        console.log("MainModule address: %s", address(mainModule));
        console.log("ImageHash: %s", string(abi.encodePacked(imageHash)));
        factory.deploy(address(mainModule), imageHash);
        assertTrue(predict.isContract());
    }

    string constant WALLET_CODE =
        "0x603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";

    // Helper Methods
    function addressOf(
        address factory,
        address mainModule,
        bytes32 imageHash
    ) public view returns (address) {
        bytes32 codeHash = keccak256(
            abi.encodePacked(
                bytes(WALLET_CODE),
                bytes32(bytes20(mainModule))
            )
        );

        bytes32 salt = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(factory),
                bytes32(imageHash),
                bytes32(codeHash)
            )
        );

        return address(bytes20(salt));
    }

    function bytesToAddress(
        bytes memory bys
    ) private pure returns (address addr) {
        assembly {
            addr := mload(add(bys, 20))
        }
    }

    function bytes32ToBytes(bytes32 input) public pure returns (bytes memory) {
        bytes memory b = new bytes(32);
        assembly {
            mstore(add(b, 32), input) // set the bytes data
        }
        return b;
    }
}
