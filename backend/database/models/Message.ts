import mongoose, { Document } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

export interface IMessageSchema extends Document {
  sender: string;
  message: string;
  timestamp: Date;
}

const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User", autopopulate: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

MessageSchema.plugin(mongooseAutoPopulate);
const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
