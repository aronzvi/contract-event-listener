const events = ["Ev1", "Ev2"];

function listener(...args) {
    let numArgs = args.length - 1;
    let eventObj = args[numArgs];
    console.log(eventObj);
   
    let event = eventObj.event;
    console.log("got event:", event, "num args:", numArgs);
    if (event == "Ev1") {
        console.log("address: ", args[0],  "value: ", args[1]);
        console.log("address: ", eventObj.args["_from"],  "value: ", eventObj.args["_from"]);
    }
    else if (event == "Ev2") {
        console.log("address: ", args[0],  "value1: ", args[1], "value2: ", args[2]);
        console.log("address: ", eventObj.args["_from"],  "value1: ", eventObj.args["_value1"], "value2: ", eventObj.args["_value2"]);
    }
}

module.exports = {
    events,
    listener
};

