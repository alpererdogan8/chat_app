import mongoose from "mongoose";

export const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/chat_app";
mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("we are connected to mongoDB");
});
