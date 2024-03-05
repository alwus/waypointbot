import { REST, Routes, ApplicationCommandOptionType } from 'discord.js';
import 'dotenv/config';

const commands = [
    {
        name: 'hey',
        description: 'replies with hey'
    },
    {
        name: 'waypoint',
        description: 'sets waypoint',
        options: [
            {
                name: 'x',
                description: 'x value',
                type: ApplicationCommandOptionType.Integer,
                required: true
            },
            {
                name: 'y',
                description: 'y value',
                type: ApplicationCommandOptionType.Integer,
                required: true
            },
            {
                name: 'z',
                description: 'z value',
                type: ApplicationCommandOptionType.Integer,
                required: true
            },
            {
                name: 'name',
                description: 'Name of the waypoint',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    }
]

const rest = new REST({
    version: '10'
}).setToken(process.env.TOKEN);


(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands}
        )

        console.log('Slash commands registered')
    } catch (e) {
        console.log(e)
    }
})();
