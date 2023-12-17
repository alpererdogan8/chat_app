import express, { Request, Response } from "express";
import morgan from "morgan";
import "./database/mongoose";
import Authentication from "./routes/authentication";
import AuthService from "./services/AuthService";
import cors from "cors";
import cookieParser from "cookie-parser";
import session, { SessionOptions } from "express-session";
import { config } from "dotenv";
import MongoStore from "connect-mongo";
import { MONGO_URI } from "./database/mongoose";
if (process.env.NODE_ENV !== "production") {
  config();
}
const app = express();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET!,
  store: new MongoStore({
    mongoUrl: MONGO_URI,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    path: "/",
  },
});
const PORT = process.env.PORT || 3000;
app.use(morgan("dev"));
app.use(cors({ origin: "*", credentials: true }));
app.use(sessionMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(AuthService.initialize);
app.use(AuthService.session);

app.use("/api/v1/auth", Authentication);
app.get("/", async (req: Request, res: Response) => {
  res.json({ data: "deneme" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
