import express, { Request, Response } from "express";
import MessageService from "../services/MessageService";

const router = express.Router();

router.post("/:roomId/send", async (req: Request, res: Response) => {
  const { roomId } = req.params;
  const { message } = req.body;
  await MessageService.sendMessage(roomId, req.user!, message);
  try {
    res.send({ status: "success" });
  } catch (error) {
    res.send(error);
  }
});

export default router;
