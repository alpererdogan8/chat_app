import { Document, Error, Model, PassportLocalDocument, PassportLocalModel, SaveOptions } from "mongoose";
import MainService from "./MainService";
import User, { IUserModal } from "../database/models/User";
import passportConfig from "../config/passportConfig";
type SignupType = {
  username: string;
  email: string;
  password: string;
};

class AuthService extends MainService<IUserModal> {
  initialize: any;
  session: any;
  constructor(model: any) {
    super(model);
    this.initialize = passportConfig.initialize();
    this.session = passportConfig.session();
  }
  public async signup({ username, email, password }: SignupType): Promise<any> {
    try {
      const userExist: any = await this.findBy("email", email);
      if (userExist) throw { message: "Email already exists", status: 409 };
      if (userExist === null) {
        const newUser = new this.modal({
          email,
          username,
        }) as PassportLocalDocument;
        await newUser.setPassword(password);
        await newUser.save();
        return newUser;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  login() {
    return passportConfig.authenticate("local");
  }
  isOnline(state: boolean) {
    return this.modal.updateOne({ isOnline: state });
  }
}

export default new AuthService(User);
