import { App } from "@slack/bolt";
import { createChannelMessage, createEmojiMessage } from "./message";

require("dotenv").config();

export const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: 3000,
});

// チャンネルを作成
app.event("channel_created", async ({ event, client }) => {
  await client.chat.postMessage({
    channel: "C039V2L7VV5",
    text: createChannelMessage(event.channel.id),
  });
});

// 絵文字イベント
app.event("emoji_changed", async ({ event, client }) => {
  if (event.subtype !== "add") return;

  await client.chat.postMessage({
    channel: "C039V2L7VV5",
    text: createEmojiMessage(event.name, event.value)
  });
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
