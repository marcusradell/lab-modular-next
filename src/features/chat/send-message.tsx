"use client";

import { chatFeature } from "./instance";

export function SendMessage() {
  async function onSend() {
    await chatFeature.service.sendMessage({ content: "Hi!" });
  }

  return <button onClick={onSend}>Send</button>;
}
