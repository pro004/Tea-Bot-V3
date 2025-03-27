module.exports = {
	config: {
		name: "onlyadminbox",
		aliases: ["onlyadbox", "adboxonly", "adminboxonly"],
		version: "1.1",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		shortDescription: {
			vi: "bật/tắt chỉ admin box sử dụng bot",
			en: "turn on/off only admin box can use bot"
		},
		longDescription: {
			vi: "bật/tắt chế độ chỉ quản trị của viên nhóm mới có thể sử dụng bot",
			en: "turn on/off only admin box can use bot"
		},
		category: "box-tools",
		guide: {
			en: "   {pn} [on | off]"
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot",
			turnedOff: "Đã tắt chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot",
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off"
		},
		en: {
			"turnedOn": "╭━━━━━🔹🔹🔹━━━━━╮\n┃ ✅ 𝗔𝗗𝗠𝗜𝗡 𝗠𝗢𝗗𝗘 𝗘𝗡𝗔𝗕𝗟𝗘𝗗 ✅┃\n┣━━━━━━━━━━━━━┫\n┃ 🔒 Only admins can use the bot now! ┃\n╰━━━━━🔹🔹🔹━━━━━╯",
			
  
  			"turnedOff": "╭━━━━━🔹🔹🔹━━━━━╮\n┃ ❌ 𝗔𝗗𝗠𝗜𝗡 𝗠𝗢𝗗𝗘 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗 ❌┃\n┣━━━━━━━━━━━━━┫\n┃ 🌍 Everyone can use the bot now! ┃\n╰━━━━━🔹🔹🔹━━━━━╯",

  			"syntaxError": "╭━━━━━━⚠️━━━━━━╮\n┃ ❌ 𝗦𝗬𝗡𝗧𝗔𝗫 𝗘𝗥𝗥𝗢𝗥 ❌┃\n┣━━━━━━━━━━━━┫\n┃ 📌 Use: {pn} on  🔹 {pn} off ┃\n┃ 🔄 Example: {pn} on ┃\n╰━━━━━━⚠️━━━━━╯"
}
	},

	onStart: async function ({ args, message, event, threadsData, getLang }) {
		if (args[0] == "on") {
			await threadsData.set(event.threadID, true, "data.onlyAdminBox");
			message.reply(getLang("turnedOn"));
		}
		else if (args[0] == "off") {
			await threadsData.set(event.threadID, false, "data.onlyAdminBox");
			message.reply(getLang("turnedOff"));
		}
		else
			return message.reply(getLang("syntaxError"));
	}
};