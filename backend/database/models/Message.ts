import mongoose, { Document } from "mongoose";

type sender = { type: string; unique: boolean; required: boolean };
type message = { type: string; required: boolean };

export interface IMessageSchema extends Document {
  sender: sender;
  message: message;
  timestamp: Date;
}

const MessageSchema = new mongoose.Schema<IMessageSchema>({
  sender: { type: String, unique: true, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IMessageSchema>("Message", MessageSchema);
