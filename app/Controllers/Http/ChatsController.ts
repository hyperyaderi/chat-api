// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import Message from "App/Models/Message";

export default class ChatsController {
  async getMessages() {
    const messages = await Database.from("messages")
      .select("name", "message", "created_at")
      .orderBy("created_at", "desc")
      .limit(100);

    return { error: false, messages: messages };
  }
  async sendMessage({ request }) {
    const { name, message } = request.all();
    await Message.create({
      name: name,
      message: message,
    });

    return { error: false };
  }
}
