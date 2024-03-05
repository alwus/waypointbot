import {Client, IntentsBitField} from 'discord.js';
import 'dotenv/config';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online`)
});

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand) {
        switch(interaction.commandName) {
            case 'hey':
                interaction.reply('Hey!');
                break;
            case 'waypoint':
                const name = interaction.options.get('name');
                const x = interaction.options.get('x');
                const y = interaction.options.get('y');
                const z = interaction.options.get('z');
                interaction.reply(`Saved the waypoint ${name.value} at ${x.value} ${y.value} ${z.value}`);
                break;
        }
    }
});

client.login(process.env.TOKEn)

