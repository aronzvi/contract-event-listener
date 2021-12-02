/*
    event NewAdmin(address indexed newAdmin);
    event NewPendingAdmin(address indexed newPendingAdmin);
    event NewDelay(uint indexed newDelay);
    event CancelTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint eta);
    event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint eta);
    event QueueTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint eta);
*/


const events = ["NewAdmin", 
                "NewPendingAdmin",
                "NewDelay",
                "CancelTransaction",
                "ExecuteTransaction",
                "QueueTransaction"]

function listener(...args) {
    console.log("timelock listener:", args);
}

module.exports = {
    events,
    listener
};