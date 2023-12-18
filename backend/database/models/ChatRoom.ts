import mongoose, { PassportLocalModel, Document } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

type ManyModel = { type: string; ref: string; autopopulate?: { maxDepth: number } };

export interface IChatRoomSchema extends Document {
  name: string;
  users: ManyModel;
  messages: ManyModel;
  timestamp: Date;
  admin: object;
}

const ChatRoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message", autopopulate: true }],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", autopopulate: true }],
  timestamp: { type: Date, default: Date.now },
  admin: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User", autopopulate: true },
});

ChatRoomSchema.plugin(mongooseAutoPopulate);
export default mongoose.model("ChatRoom", ChatRoomSchema);
