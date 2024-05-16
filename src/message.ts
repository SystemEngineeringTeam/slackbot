export const createChannelMessage = (channelId: string): string => {
  return `チャンネルが追加されたぞ！！\n` + `<#${channelId}>`;
};

export const createEmojiMessage = (
  emojiName: string,
  emojiUrl: string,
): string => {
  return `絵文字が追加されたぞ！！` + `\n` + `${emojiUrl}`;
};
