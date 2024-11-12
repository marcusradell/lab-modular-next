"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";
import { Message } from ".";

export async function sendMessageAction(message: Message) {
  await chatFeature.service.sendMessage(message);

  revalidatePath("/");
}
