const { getStreamFromURL } = global.utils;

module.exports = {
	config: {
		name: "antichangeinfobox",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Chống đổi thông tin box chat",
			en: "Anti change info box"
		},
		longDescription: {
			vi: "Bật tắt chức năng chống thành viên đổi thông tin box chat của bạn",
			en: "Turn on/off anti change info box"
		},
		category: "box-tools",
		guide: {
			vi: "   {pn} avt [on | off]: chống đổi avatar box chat"
				+ "\n   {pn} name [on | off]: chống đổi tên box chat"
				+ "\n   {pn} theme [on | off]: chống đổi theme (chủ đề) box chat"
				+ "\n   {pn} emoji [on | off]: chống đổi trạng emoji box chat",
			en: "   {pn} avt [on | off]: anti change avatar box chat"
				+ "\n   {pn} name [on | off]: anti change name box chat"
				+ "\n   {pn} theme [on | off]: anti change theme (chủ đề) box chat"
				+ "\n   {pn} emoji [on | off]: anti change emoji box chat"
		}
	},

	langs: {
		vi: {
			antiChangeAvatarOn: "Đã bật chức năng chống đổi avatar box chat",
			antiChangeAvatarOff: "Đã tắt chức năng chống đổi avatar box chat",
			missingAvt: "Bạn chưa đặt avatar cho box chat",
			antiChangeNameOn: "Đã bật chức năng chống đổi tên box chat",
			antiChangeNameOff: "Đã tắt chức năng chống đổi tên box chat",
			antiChangeThemeOn: "Đã bật chức năng chống đổi theme (chủ đề) box chat",
			antiChangeThemeOff: "Đã tắt chức năng chống đổi theme (chủ đề) box chat",
			antiChangeEmojiOn: "Đã bật chức năng chống đổi emoji box chat",
			antiChangeEmojiOff: "Đã tắt chức năng chống đổi emoji box chat",
			antiChangeAvatarAlreadyOn: "Hiện tại box chat của bạn đang bật chức năng cấm thành viên đổi avatar",
			antiChangeNameAlreadyOn: "Hiện tại box chat của bạn đang bật chức năng cấm thành viên đổi tên",
			antiChangeThemeAlreadyOn: "Hiện tại box chat của bạn đang bật chức năng cấm thành viên đổi theme (chủ đề)",
			antiChangeEmojiAlreadyOn: "Hiện tại box chat của bạn đang bật chức năng cấm thành viên đổi emoji"
		},
		en:{
			"antiChangeAvatarOn": "╭━━━━━━━━━━━━━━━━━━━🖼️━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗡𝗧𝗜-𝗔𝗩𝗔𝗧𝗔𝗥 𝗖𝗛𝗔𝗡𝗚𝗘 𝗢𝗡 ✅         ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Group avatar change is now locked!  ┃\n╰━━━━━━━━━━━━━━━━━━━🖼️━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeAvatarOff": "╭━━━━━━━━━━━━━━━━━━━🖼️━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗡𝗧𝗜-𝗔𝗩𝗔𝗧𝗔𝗥 𝗖𝗛𝗔𝗡𝗚𝗘 𝗢𝗙𝗙 ✅        ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Group members can now change avatar┃\n╰━━━━━━━━━━━━━━━━━━━🖼️━━━━━━━━━━━━━━━━━━━╯",
		        
			"missingAvt": "╭━━━━━━━━━━━━━━━━━━━⚠️━━━━━━━━━━━━━━━━━━━╮\n┃ ❌ 𝗡𝗢 𝗔𝗩𝗔𝗧𝗔𝗥 𝗦𝗘𝗧 ❌                     ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 You haven’t set an avatar for this  ┃\n┃ chat group yet!                         ┃\n╰━━━━━━━━━━━━━━━━━━━⚠️━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeNameOn": "╭━━━━━━━━━━━━━━━━━━━📝━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗡𝗧𝗜-𝗡𝗔𝗠𝗘 𝗖𝗛𝗔𝗡𝗚𝗘 𝗢𝗡 ✅            ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Group name change is now locked!   ┃\n╰━━━━━━━━━━━━━━━━━━━📝━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeNameOff": "╭━━━━━━━━━━━━━━━━━━━📝━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗡𝗧𝗜-𝗡𝗔𝗠𝗘 𝗖𝗛𝗔𝗡𝗚𝗘 𝗢𝗙𝗙 ✅           ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Group members can now change name! ┃\n╰━━━━━━━━━━━━━━━━━━━📝━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeThemeOn": "╭━━━━━━━━━━━━━━━━━━━🎨━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗡𝗧𝗜-𝗧𝗛𝗘𝗠𝗘 𝗖𝗛𝗔𝗡𝗚𝗘 𝗢𝗡 ✅          ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Group theme change is now locked!  ┃\n╰━━━━━━━━━━━━━━━━━━━🎨━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeThemeOff": "╭━━━━━━━━━━━━━━━━━━━🎨━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗡𝗧𝗜-𝗧𝗛𝗘𝗠𝗘 𝗖𝗛𝗔𝗡𝗚𝗘 𝗢𝗙𝗙 ✅         ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Group members can now change theme!┃\n╰━━━━━━━━━━━━━━━━━━━🎨━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeEmojiOn": "╭━━━━━━━━━━━━━━━━━━━😊━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗡𝗧𝗜-𝗘𝗠𝗢𝗝𝗜 𝗖𝗛𝗔𝗡𝗚𝗘 𝗢𝗡 ✅          ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Group emoji change is now locked!  ┃\n╰━━━━━━━━━━━━━━━━━━━😊━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeEmojiOff": "╭━━━━━━━━━━━━━━━━━━━😊━━━━━━━━━━━━━━━━━━━╮\n┃ ✅ 𝗔𝗡𝗧𝗜-𝗘𝗠𝗢𝗝𝗜 𝗖𝗛𝗔𝗡𝗚𝗘 𝗢𝗙𝗙 ✅         ┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🔹 Group members can now change emoji!┃\n╰━━━━━━━━━━━━━━━━━━━😊━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeAvatarAlreadyOn": "╭━━━━━━━━━━━━━━━━━━━🖼️━━━━━━━━━━━━━━━━━━━╮\n┃ ⚠️ 𝗔𝗩𝗔𝗧𝗔𝗥 𝗖𝗛𝗔𝗡𝗚𝗘 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗟𝗢𝗖𝗞𝗘𝗗 ⚠️  ┃\n╰━━━━━━━━━━━━━━━━━━━🖼️━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeNameAlreadyOn": "╭━━━━━━━━━━━━━━━━━━━📝━━━━━━━━━━━━━━━━━━━╮\n┃ ⚠️ 𝗡𝗔𝗠𝗘 𝗖𝗛𝗔𝗡𝗚𝗘 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗟𝗢𝗖𝗞𝗘𝗗 ⚠️   ┃\n╰━━━━━━━━━━━━━━━━━━━📝━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeThemeAlreadyOn": "╭━━━━━━━━━━━━━━━━━━━🎨━━━━━━━━━━━━━━━━━━━╮\n┃ ⚠️ 𝗧𝗛𝗘𝗠𝗘 𝗖𝗛𝗔𝗡𝗚𝗘 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗟𝗢𝗖𝗞𝗘𝗗 ⚠️  ┃\n╰━━━━━━━━━━━━━━━━━━━🎨━━━━━━━━━━━━━━━━━━━╯",
		        
			"antiChangeEmojiAlreadyOn": "╭━━━━━━━━━━━━━━━━━━━😊━━━━━━━━━━━━━━━━━━━╮\n┃ ⚠️ 𝗘𝗠𝗢𝗝𝗜 𝗖𝗛𝗔𝗡𝗚𝗘 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗟𝗢𝗖𝗞𝗘𝗗 ⚠️  ┃\n╰━━━━━━━━━━━━━━━━━━━😊━━━━━━━━━━━━━━━━━━━╯"
		        }
		        
	},

	onStart: async function ({ message, event, args, threadsData, getLang }) {
		if (!["on", "off"].includes(args[1]))
			return message.SyntaxError();
		const { threadID } = event;
		const dataAntiChangeInfoBox = await threadsData.get(threadID, "data.antiChangeInfoBox", {});
		async function checkAndSaveData(key, data) {
			dataAntiChangeInfoBox[key] = args[1] === "on" ? data : false;
			await threadsData.set(threadID, dataAntiChangeInfoBox, "data.antiChangeInfoBox");
			message.send(getLang(`antiChange${key.slice(0, 1).toUpperCase()}${key.slice(1)}${args[1].slice(0, 1).toUpperCase()}${args[1].slice(1)}`));
		}
		switch (args[0]) {
			case "avt":
			case "avatar": {
				const { imageSrc } = await threadsData.get(threadID);
				if (!imageSrc)
					return message.send(getLang("missingAvt"));
				await checkAndSaveData("avatar", imageSrc);
				break;
			}
			case "name": {
				const { threadName } = await threadsData.get(threadID);
				await checkAndSaveData("name", threadName);
				break;
			}
			case "theme": {
				const { threadThemeID } = await threadsData.get(threadID);
				await checkAndSaveData("theme", threadThemeID);
				break;
			}
			case "emoji": {
				const { emoji } = await threadsData.get(threadID);
				await checkAndSaveData("emoji", emoji);
				break;
			}
			default: {
				return message.SyntaxError();
			}
		}
	},

	onEvent: async function ({ message, event, threadsData, role, api, getLang }) {
		const { threadID, logMessageType, logMessageData, author } = event;
		switch (logMessageType) {
			case "log:thread-image": {
				const imgURL = await threadsData.get(threadID, "data.antiChangeInfoBox.avatar");
				if (!imgURL)
					return;
				return async function () {
					if (role < 1 && api.getCurrentUserID() !== author) {
						message.reply(getLang("antiChangeAvatarAlreadyOn"));
						api.changeGroupImage(await getStreamFromURL(imgURL), threadID);
					}
					else {
						const imageSrc = logMessageData.url;
						await threadsData.set(threadID, imageSrc, "data.antiChangeInfoBox.avatar");
					}
				};
			}
			case "log:thread-name": {
				const name = await threadsData.get(threadID, "data.antiChangeInfoBox.name");
				if (name == false)
					return;
				return async function () {
					if (role < 1 && api.getCurrentUserID() !== author) {
						message.reply(getLang("antiChangeNameAlreadyOn"));
						api.setTitle(name, threadID);
					}
					else {
						const threadName = logMessageData.name;
						await threadsData.set(threadID, threadName, "data.antiChangeInfoBox.name");
					}
				};
			}
			case "log:thread-color": {
				const themeID = await threadsData.get(threadID, "data.antiChangeInfoBox.theme");
				if (themeID == false)
					return;
				return async function () {
					if (role < 1 && api.getCurrentUserID() !== author) {
						message.reply(getLang("antiChangeThemeAlreadyOn"));
						api.changeThreadColor(themeID || "196241301102133", threadID); // 196241301102133 is default color
					}
					else {
						const threadThemeID = logMessageData.theme_id;
						await threadsData.set(threadID, threadThemeID, "data.antiChangeInfoBox.theme");
					}
				};
			}
			case "log:thread-icon": {
				const emoji = await threadsData.get(threadID, "data.antiChangeInfoBox.emoji");
				if (emoji == false)
					return;
				return async function () {
					if (role < 1 && api.getCurrentUserID() !== author) {
						message.reply(getLang("antiChangeEmojiAlreadyOn"));
						api.changeThreadEmoji(emoji, threadID);
					}
					else {
						const threadEmoji = logMessageData.thread_icon;
						await threadsData.set(threadID, threadEmoji, "data.antiChangeInfoBox.emoji");
					}
				};
			}
		}
	}
};