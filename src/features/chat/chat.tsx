import { createChatFeature } from ".";

export async function Chat() {
  const messages = await createChatFeature().service.getAllMessages();

  return <div>Messages: {JSON.stringify(messages, null, 2)}</div>;
}
