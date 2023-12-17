import passport from "passport";
import User, { IUserModal } from "../database/models/User";

type _User = IUserModal;
declare global {
  namespace Express {
    interface User extends _User {}
  }
}
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
export default passport;
