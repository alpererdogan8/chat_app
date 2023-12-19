import ChatRoom, { IChatRoomSchema } from "../database/models/ChatRoom";
import MainService from "./MainService";

class RoomService extends MainService<IChatRoomSchema> {
  constructor(modal: any) {
    super(modal);
  }
  async getRooms() {
    return this.load();
  }
  async getRoom(id: string) {
    return this.modal
      .findById(id)
      .populate({
        path: "users",
        select: "username isOnline",
      })
      .exec();
  }
  async createRoom({ admin, name }: Pick<IChatRoomSchema, "admin" | "name">): Promise<any> {
    return this.insert({ admin, name });
  }
  async deleteRoom(id: string): Promise<any> {
    return this.delete(id);
  }
  async updateRoomName(id: string, name: string): Promise<any> {
    await this.update(id, { $set: { name: name } });
    return this.getRoom(id);
  }
  async joinRoom(user: string, roomId: string): Promise<any> {
    await this.update(roomId, { $push: { users: user } });
    return this.getRoom(roomId);
  }

  async leaveRoom(user: string, roomId: string) {
    await this.update(roomId, { $pull: { users: user } });
    return this.getRoom(roomId);
  }
}

export default new RoomService(ChatRoom);
