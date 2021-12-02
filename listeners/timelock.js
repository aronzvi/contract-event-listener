/*
    event NewAdmin(address indexed newAdmin);
    event NewPendingAdmin(address indexed newPendingAdmin);
    event NewDelay(uint indexed newDelay);
    event CancelTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint eta);
    event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint eta);
    event QueueTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint eta);
*/

const listeners = [
    "NewAdmin(address)", 
    "NewPendingAdmin(address)",
    "NewDelay(uint)",
    "CancelTransaction(bytes32, address, uint, string, bytes, uint)",
    "ExecuteTransaction(bytes32, address, uint, string, bytes, uint)",
    "QueueTransaction(bytes32, address, uint, string, bytes, uint)"
];

function listener(...args) {
    console.log("listener:", args);
}

module.exports = {
    events,
    listener
};