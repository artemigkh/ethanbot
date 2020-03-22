import {Client} from "discord.js";
import {Config} from "./Config";
import {getRandomResponse} from "./responses";

const client = new Client();

client.login(Config.discordToken).then(
    success => console.info(`Successfully logged in with api key ${success}`),
    err => console.error(err)
);

client.on('message', message => {
    if (!message.content.startsWith('!ethanbot') || message.author.bot) {
        return;
    } else {
        message.channel.send(getRandomResponse());
    }
});
