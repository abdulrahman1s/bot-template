import config from './config.js'
import { Client, GatewayIntentBits as Intents } from 'discord.js'

const client = new Client({
	intents: Intents.Guilds
})

client.on('ready', () => {
	console.log('Connected to Discord API')
})

client.login(config.token)


// Prevent the application from crashing.
for (const event of ['uncaughtException', 'unhandledRejection']) {
	process.on(event, (err) => console.warn(event, err, err?.stack))
}