const discordClient = require("../discordclient");
const events = ["EarlyWithdrawal"];

const channelId = "919977069625106523";

async function listener(...args) {
    let numArgs = args.length - 1;
    let eventObj = args[numArgs];
    //console.log(eventObj);
   
    let event = eventObj.event;
    console.log("Busd listener: got event:", event, "num args:", numArgs);
    switch(event) {
      case "EarlyWithdrawal":
        console.log("RevaStakingPool EarlyWithdrawal event!")
        let channel = await discordClient.fetchChannel(channelId);
        channel.send(JSON.stringify(eventObj));
        break;
      default:
        console.error("unhandled event:", event);
    }
}

module.exports = {
    events,
    listener
};


