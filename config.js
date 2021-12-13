cakeListener = require("./listeners/cake");
cakeAbi = require("./abi/Cake")
busdListener = require("./listeners/busd");
busdAbi = require("./abi/Busd") 

module.exports = {
    contracts: [
        {
            name: "Cake",
            addresses: ["0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"], 
            abi: cakeAbi,
            listener: cakeListener
        },
        {
            name: "BUSD",
            addresses: ["0xe9e7cea3dedca5984780bafc599bd69add087d56"],
            abi: busdAbi,
            listener: busdListener
        }
    ]
}

