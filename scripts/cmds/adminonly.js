const fs = require("fs-extra");
const { config } = global.GoatBot;
const { client } = global;

module.exports = {
	config: {
		name: "adminonly",
		aliases: ["adonly", "onlyad", "onlyadmin"],
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "bật/tắt chỉ admin sử dụng bot",
			en: "turn on/off only admin can use bot"
		},
		longDescription: {
			vi: "bật/tắt chế độ chỉ admin mới có thể sử dụng bot",
			en: "turn on/off only admin can use bot"
		},
		category: "owner",
		guide: {
			en: "{pn} [on | off]"
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chế độ chỉ admin mới có thể sử dụng bot",
			turnedOff: "Đã tắt chế độ chỉ admin mới có thể sử dụng bot",
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off"
		},
		en: {
			"turnedOn": "╭━━━━━━━━━━━━━━━━━━━🔒━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗗𝗠𝗜𝗡-𝗢𝗡𝗟𝗬 𝗠𝗢𝗗𝗘 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗘𝗗 ✅      ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Only admins can now use the bot!    ┃\n╰━━━━━━━━━━━━━━━━━━━🔒━━━━━━━━━━━━━━━━━━━╯",
		        
			"turnedOff": "╭━━━━━━━━━━━━━━━━━━━🔓━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗗𝗠𝗜𝗡-𝗢𝗡𝗟𝗬 𝗠𝗢𝗗𝗘 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ✅     ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Everyone can now use the bot!       ┃\n╰━━━━━━━━━━━━━━━━━━━🔓━━━━━━━━━━━━━━━━━━━╯",
		        
			"syntaxError": "╭━━━━━━━━━━━━━━━━━━━⚠️━━━━━━━━━━━━━━━━━━━╮\n┃ ❌ 𝗦𝗬𝗡𝗧𝗔𝗫 𝗘𝗥𝗥𝗢𝗥 ❌                       ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Use the correct format:            ┃\n┃ 🔹 {pn} on  ➜ Enable Admin-Only Mode    ┃\n┃ 🔹 {pn} off ➜ Disable Admin-Only Mode   ┃\n╰━━━━━━━━━━━━━━━━━━━⚠️━━━━━━━━━━━━━━━━━━━╯"
		        }
		        
	},

	onStart: function ({ args, message, getLang  }) {
		if (args[0] == "on") {
			config.adminOnly.enable = true;
			message.reply(getLang("turnedOn"));
			fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
		}
		else if (args[0] == "off") {
			config.adminOnly.enable = false;
			message.reply(getLang("turnedOff"));
			fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
		}
		else
			return message.reply(getLang("syntaxError"));
	}
};