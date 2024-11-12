"use client";

import { sendMessageAction } from "./actions";

export function SendMessage() {
  async function onSendMessage() {
    console.log("Inside onSend");

    await sendMessageAction({ content: "Hi!" });
  }

  return <button onClick={onSendMessage}>Send</button>;
}
