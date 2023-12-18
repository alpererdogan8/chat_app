import MainService from "./MainService";
import Message, { IMessageSchema } from "../database/models/Message";
import RoomService from "./RoomService";

class MessageService extends MainService<IMessageSchema> {
  constructor(modal: any) {
    super(modal);
  }
  async createMessage(sender: object, message: string) {
    return this.insert({ sender, message });
  }
  async sendMessage(roomId: string, sender: object, message: string) {
    const newMessage = await this.createMessage(sender, message);
    return await RoomService.update(roomId, { $push: { messages: newMessage } });
  }
}

export default new MessageService(Message);
