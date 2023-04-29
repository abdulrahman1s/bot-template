import { SlashCommandBuilder } from 'discord.js'

export const pingCmd = {
	data: new SlashCommandBuilder().setName('ping').setDescription('No description'),
	/**
	 *
	 * @param {import('discord.js').ChatInputCommandInteraction} ctx
	 */
	async run(ctx) {
		await ctx.reply('Pong')
	}
}
