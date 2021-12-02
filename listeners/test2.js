const events = ["Test2Ev1", "Test2Ev2"];

function listener(...args) {
    let numArgs = args.length - 1;
    let eventObj = args[numArgs];
    console.log(eventObj);
   
    let event = eventObj.event;
    console.log("got event:", event, "num args:", numArgs);
    if (event == "Test2Ev1") {
        console.log("got Test2Ev1");
        console.log("address: ", eventObj.args["_from"],  "value: ", eventObj.args["_from"]);
    }
    else if (event == "Test2Ev2") {
       console.log("got Test2Ev2");
    }
}

module.exports = {
    events,
    listener
};

