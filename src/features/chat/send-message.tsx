"use client";

import { sendMessageAction } from "./actions";

export function SendMessage() {
  async function onSend() {
    console.log("Inside onSend");

    await sendMessageAction({ content: "Hi!" });
  }

  return <button onClick={onSend}>Send</button>;
}
