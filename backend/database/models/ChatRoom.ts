import mongoose from "mongoose";
import { Document } from "mongoose";

type ManyModel = { type: string; ref: string; autopopulate: { maxDepth: number } };

export interface IChatRoomSchema extends Document {
  name: string;
  users: ManyModel;
  messages: ManyModel;
  timestamp: Date;
  admin: object;
}

const ChatRoomSchema = new mongoose.Schema<IChatRoomSchema>({
  name: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", autopopulate: { maxDepth: 1 } }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message", autopopulate: { maxDepth: 1 } }],
  timestamp: { type: Date, default: Date.now },
  admin: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IChatRoomSchema>("ChatRoom", ChatRoomSchema);
