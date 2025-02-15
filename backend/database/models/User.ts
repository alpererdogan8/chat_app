import mongoose, { Document, PassportLocalModel } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import passportLocalMongoose from "passport-local-mongoose";

export interface IUserModal extends Document {
  username: string;
  email: string;
  password?: {
    hash: string;
    salt: string;
  };
  isOnline?: object;
  timestamp?: Date;
}

const UserSchema = new mongoose.Schema<IUserModal>({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: {
    hash: String,
    salt: String,
  },
  timestamp: { type: Date, default: Date.now },
  isOnline: { type: Boolean, default: false },
});

UserSchema.path("password.hash").validate(function (value) {
  return value.length;
}, "Password hash cannot be blank.");
UserSchema.path("password.salt").validate(function (value) {
  return value.length;
}, "Password hash cannot be blank.");

UserSchema.plugin(mongooseAutoPopulate);
UserSchema.plugin(passportLocalMongoose, {
  hashField: "password.hash",
  saltField: "password.salt",
});

export default mongoose.model("User", UserSchema) as PassportLocalModel<Document>;
