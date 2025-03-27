const axios = require('axios');

module.exports = {
  config: {
    name: 'spotify',
    aliases: ['spotifydl', 'spd', 'sp', 'spdl'],
    version: '1.5',
    author: 'JARiF',
    countDown: 20,
    role: 0,
    shortDescription: { en: 'Search for a song on Spotify.' },
    longDescription: { en: 'Search for a song on Spotify.' },
    category: 'music',
    guide: { en: '{pn} [ provide a track query or track link ]' },
  },
  onStart: async function ({
    api: clientAPI,
    event: clientEvent,
    args: commandArgs,
    message: receivedMessage,
  }) {
    const query = commandArgs.join(' ');

    if (!query) {
      return receivedMessage.reply('⚠️ | Please provide a track name or a track link.');
    }

    if (this.config.author !== 'JARiF') {
      const errorResponse = `
        Unauthorized!
        The author name must not be changed.
        Author: JARiF
      `;
      receivedMessage.reply(errorResponse);
    } else {
      if (
        query.match(
          /^(https:\/\/open\.spotify\.com\/track\/|https:\/\/spotify\.link\/)/i
        )
      ) {
        const downloadURL =
          'https://spotify.teamjsus.repl.co/download?track=' +
          encodeURIComponent(query);

        try {
          const downloadingMessage = await receivedMessage.reply('⌛ | Downloading track...');
          const response = await axios.get(downloadURL);
          const downloadData = response.data.download;

          receivedMessage.reply({
            body: `
              • Title: ${response.data.title}
              • Artist: ${response.data.artist}
              • Upload Date: ${response.data.uploadDate}
              • Album: ${response.data.album}
              • Duration: ${response.data.duration}
            `,
            attachment: await global.utils.getStreamFromURL(downloadData),
          });

          receivedMessage.unsend(downloadingMessage.messageID);
        } catch (error) {
          console.error(error);
          receivedMessage.reply('Error: ' + error);
          receivedMessage.unsend(downloadingMessage.messageID);
        }
      } else {
        const searchURL =
          'https://spotify-s.teamjsus.repl.co/search?track=' +
          encodeURIComponent(query);

        try {
          const response = await axios.get(searchURL);
          const tracks = response.data;

          if (tracks.length === 0) {
            return receivedMessage.reply('⚠️ | No tracks found for the given query.');
          }

          const trackList = tracks
            .map(
              (track, index) =>
                `${index + 1}. ${track.track_name}\nDuration: ${track.duration}\nArtist: ${track.artist_name}`
            )
            .join('\n\n');
          const thumbnails = tracks.map((track) => track.thumbnail);

          receivedMessage.reply(
            {
              body: trackList + '\n\nReply to the message with a number to choose or any content to cancel.',
              attachment: await Promise.all(
                thumbnails.map((thumbnail) =>
                  global.utils.getStreamFromURL(thumbnail)
                )
              ),
            },
            async (replyMessage, userMessage) => {
              const replyData = {
                commandName: this.config.name,
                messageID: userMessage.messageID,
                tracks: tracks,
              };
              global.GoatBot.onReply.set(userMessage.messageID, replyData);
            }
          );
        } catch (error) {
          console.error(error);
          clientAPI.sendMessage('Error: ' + error, clientEvent.threadID);
        }
      }
    }
  },
  onReply: async function ({
    api: clientAPI,
    event: clientEvent,
    Reply: replyData,
    args: replyArgs,
    message: userMessage,
  }) {
    const selectedOption = replyArgs[0].toLowerCase();
    const { messageID: replyMessageID, tracks: allTracks } = replyData;

    if (!isNaN(selectedOption) && selectedOption >= 1 && selectedOption <= allTracks.length) {
      const selectedTrack = allTracks[selectedOption - 1];
      userMessage.unsend(replyMessageID);

      const downloadingMessage = await userMessage.reply(
        `✅ | Downloading track "${selectedTrack.track_name}"`
      );
      const downloadURL =
        'https://spotify.teamjsus.repl.co/download?track=' +
        encodeURIComponent(selectedTrack.track_url);

      try {
        const response = await axios.get(downloadURL);
        const downloadData = response.data.download;

        userMessage.reply({
          body: `
            • Title: ${response.data.title}
            • Artist: ${response.data.artist}
            • Upload Date: ${response.data.uploadDate}
            • Album: ${response.data.album}
            • Duration: ${response.data.duration}
          `,
          attachment: await global.utils.getStreamFromURL(downloadData),
        });
      } catch (error) {
        console.error(error);
        clientAPI.sendMessage('Error: ' + error, clientEvent.threadID);
      }

      userMessage.unsend(downloadingMessage.messageID);
    }
  },
};
