module.exports = {
  config: {
    name: "top",
    version: "1.0",
    author: "loufi",
    role: 0,
    shortDescription: {
      vi: "",
      en: "top 10 users 🥰"
    },
    longDescription: {
      vi: "",
      en: "😗"
    },
    category: "tools",
    guide: {
      vi: "",
      en: ""
    }
  },
  onStart: async function ({ api, args, message, event, usersData }) {
    const allUsers = await usersData.getAll();
 
    const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 10);
 
    const topUsersList = topUsers.map((user, index) => `${index + 1}. ${user.name}: ${user.money}`);
 
    const messageText = `Top 10 richest members:\n━━━━━━━━━━━━━━━━━\n${topUsersList.join('\n')}\n━━━━━━━━━━━━━━━━━`;
 
    message.reply(messageText);
  }
};