import express, { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";
const router = express.Router();

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  return next();
};

router.post("/signup", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  await AuthService.signup({ username, email, password });
  res.json({ success: "OK", message: "user successfuly created" });
});

router.get("/user-profile", isAuth, (req: Request, res: Response) => {
  try {
    const cookies = { ...req.session.cookie, ...req.cookies, user: req.user };
    res.send({ user: req.user, cookies });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/login", AuthService.login(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    await AuthService.isOnline(true);
    res.status(200).redirect("/api/v1/auth/user-profile");
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/logout", isAuth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await AuthService.isOnline(false);
    req.logout(() => {
      res.status(204).json({});
    });
  } catch (error) {
    next(error);
  }
});

export default router;
