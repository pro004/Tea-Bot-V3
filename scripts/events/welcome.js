const { getTime, drive } = global.utils;

module.exports = {
	config: {
		name: "welcome",
		version: "1.2",
		author: "NTKhang"
	},

	langs: {
		vi: {
			session1: "sáng",
			session2: "trưa",
			session3: "chiều",
			session4: "tối",
			welcomeMessage: "Cảm ơn bạn đã mời tôi vào nhóm!\nPrefix bot: %1\nĐể xem danh sách lệnh hãy nhập: %1help",
			multiple1: "bạn",
			multiple2: "các bạn",
			defaultWelcomeMessage: "Xin chào {userName}.\nChào mừng bạn đến với {boxName}.\nChúc bạn có buổi {session} vui vẻ!"
		},
		en: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			welcomeMessage: ` ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n[⚜️] 𝙈𝙖𝙡𝙞𝙝𝙖 𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧:- 𝙓𝙧𝙤𝙩𝙞𝙘𝙠 [⚜️]\n[⚜️] 1-𝘿𝙤𝙣𝙩 𝙎𝙥𝙖𝙢 𝙏𝙝𝙚 𝘽𝙤𝙩\n[⚜️] 𝘿𝙤𝙣𝙩 𝙆𝙞𝙘𝙠 𝘼𝙣𝙙 𝙍𝙚-𝘼𝙙𝙙 𝙏𝙝𝙚 𝘽𝙤𝙩\n[⚜️] 𝙏𝙤 𝙎𝙚𝙚 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 𝘼𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚 𝙏𝙮𝙥𝙚 [ /help ] \n 𝙏𝙝𝙞𝙨 𝘽𝙤𝙩 𝙄𝙨 𝙀𝙙𝙞𝙩𝙞𝙣𝙜 𝘽𝙮 𝙓𝙧𝙤𝙩𝙞𝙘𝙠\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
\n❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [ / ]❫･━━❜\n[⚜️] 𝙄𝙛 𝙔𝙤𝙪 𝙃𝙖𝙫𝙚 𝘼𝙣𝙮 𝙌𝙪𝙚𝙨𝙩𝙞𝙤𝙣 𝙊𝙧 𝙉𝙚𝙚𝙙 𝙃𝙚𝙡𝙥 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣: https://www.facebook.com/protick.mrc\n[⚜️] 𝗤𝗧𝗩 𝗰𝗮𝗻 𝘂𝘀𝗲 [ /𝗵𝗲𝗹𝗽 ] 𝗿𝘂𝗹𝗲 𝘁𝗼 𝘀𝗲𝗲 𝗽𝗲𝗼𝗽𝗹𝗲'𝘀 𝗱𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝘀𝗲𝘁 𝗯𝗼𝘅 𝗿𝘂𝗹𝗲𝘀\n[⚜️] 𝗠𝗲𝗺𝗯𝗲𝗿𝘀 𝘂𝘀𝗲 [ /𝗿𝘂𝗹𝗲 ] 𝘁𝗼 𝘃𝗶𝗲𝘄 𝘁𝗵𝗲𝗶𝗿 𝗯𝗼𝘅 𝗿𝘂𝗹𝗲𝘀\n◆━━━━━━━━━━━━━◆\n[⚜️] 𝐓𝐡𝐢𝐬 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 𝙓𝙧𝙤𝙩𝙞𝙘𝙠. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠\n[⚜️] 𝙰𝚍𝚖𝚒𝚗: Protick`,
			multiple1: "you",
			multiple2: "you guys",
			defaultWelcomeMessage: `▂▃▅▆ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞...▆▅▃▂\n
⫸ 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡... ⫷\n
●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n
[⚜️] 𝙃𝙚𝙡𝙡𝙤. ${userName} 👋\n
[⚜️] 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 ${multiple} 𝙩𝙤 𝙩𝙝𝙚 𝙘𝙝𝙖𝙩 𝙜𝙧𝙤𝙪𝙥: 『 ${boxName} 』\n
[⚜️] 𝙃𝙖𝙫𝙚 𝙖 𝙣𝙞𝙘𝙚 ${session} ✨\n
●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●`
		}
	},

	onStart: async ({ threadsData, message, event, api, getLang }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const hours = getTime("HH");
				const { threadID } = event;
				const { nickNameBot } = global.GoatBot.config;
				const prefix = global.utils.getPrefix(threadID);
				const dataAddedParticipants = event.logMessageData.addedParticipants;
				// if new member is bot
				if (dataAddedParticipants.some(item => item.userFbId == api.getCurrentUserID())) {
					if (nickNameBot)
						api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
					return message.send(getLang("welcomeMessage", prefix));
				}
				// if new member:
				const threadData = await threadsData.get(threadID);
				if (threadData.settings.sendWelcomeMessage == false)
					return;
				const threadName = threadData.threadName;
				const userName = [], mentions = [];
				let multiple = false;

				if (dataAddedParticipants.length > 1)
					multiple = true;
				for (const user of dataAddedParticipants) {
					userName.push(user.fullName);
					mentions.push({
						tag: user.fullName,
						id: user.userFbId
					});
				}
				// {userName}:   name of new member
				// {multiple}:   
				// {boxName}:    name of group
				// {threadName}: name of group
				// {session}:    session of day
				let { welcomeMessage = getLang("defaultWelcomeMessage") } = threadData.data;
				const form = {
					mentions: welcomeMessage.match(/\{userNameTag\}/g) ? mentions : null
				};
				welcomeMessage = welcomeMessage
					.replace(/\{userName\}|\{userNameTag\}/g, userName.join(", "))
					.replace(/\{boxName\}|\{threadName\}/g, threadName)
					.replace(/\{multiple\}/g, multiple ? getLang("multiple2") : getLang("multiple1"))
					.replace(/\{session\}/g, hours <= 10 ?
						getLang("session1") :
						hours <= 12 ?
							getLang("session2") :
							hours <= 18 ?
								getLang("session3") :
								getLang("session4")
					);

				form.body = `${welcomeMessage}`;

				if (threadData.data.welcomeAttachment) {
					const files = threadData.data.welcomeAttachment;
					const attachments = files.reduce((acc, file) => {
						acc.push(drive.getFile(file, "stream"));
						return acc;
					}, []);
					form.attachment = (await Promise.allSettled(attachments))
						.filter(({ status }) => status == "fulfilled")
						.map(({ value }) => value);
				}
				message.send(form);
			};
	}
};