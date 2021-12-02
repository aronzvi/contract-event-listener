const events = ["Test2Ev1", "Test2Ev2"];

function listener(...args) {
    let numArgs = args.length - 1;
    let eventObj = args[numArgs];
    console.log(eventObj);
   
    let event = eventObj.event;
    console.log("test2 listener: got event:", event);
    switch(event) {
        case "Test2Ev1":
            console.log("got Test2Ev1");
            console.log("address: ", eventObj.args["_from"],  "value: ", eventObj.args["_from"]);
            break
        case "Test2Ev2":
            console.log("got Test2Ev2");
            break
        default:
            console.error("unhandled event:", event)
    }
}

module.exports = {
    events,
    listener
};

