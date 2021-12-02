test1Listener = require("./listeners/test1");
test1Abi = require("./abi/Test1") 
test2Listener = require("./listeners/test2");
test2Abi = require("./abi/Test2") 

module.exports = {
    contracts: [
        {
            name: "Test1",
            addresses: ["0xA6f150352273829Eaf3F1026E18E71838772b68C",
                        "0xd009FB2B70F4d1Bf2f7C1f15ca3DB1D395D41262",
                        "0x94F6192aef57Ba7EAE0c96053734DB6474c978Cb"
            ], 
            abi: test1Abi,
            listener: test1Listener
        },
        {
            name: "Test2",
            addresses: ["0xb8417Db8658F831A4DdcA50bF55fFa4F69344185",
                        "0x5E4dB28E758327F14a108cB33CA8852E07580A69",
                        "0x3789022246b77651bd89F4C0aaEd8670ce37ECD8"
            ], 
            abi: test2Abi,
            listener: test2Listener
        }
    ]
}

