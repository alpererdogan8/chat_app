import express, { NextFunction, Request, Response } from "express";
import RoomService from "../services/RoomService";
const router = express.Router();

router.get("/all", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ data: await RoomService.getRooms() });
  } catch (error) {
    res.send(error);
  }
});
router.post("/create", async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  try {
    const room = await RoomService.createRoom({ admin: req.user?._id, name });
    const data = await RoomService.joinRoom(req.user?._id, room._id);
    res.status(200).json({ status: 200, data });
  } catch (error) {
    res.send(error);
  }
});
router.delete("/:id/delete", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    await RoomService.deleteRoom(id);
    res.status(200).json({ status: 200, message: "room deleted successfully" });
  } catch (error) {
    res.send(error);
  }
});
router.patch("/:id/edit", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await RoomService.updateRoomName(id, name);
    res.status(200).json({ status: 200, message: "room edited successfully" });
  } catch (error) {
    res.send(error);
  }
});
router.post("/:roomId/join", async (req: Request, res: Response) => {
  const { roomId } = req.params;
  try {
    const data = await RoomService.joinRoom(req.user?._id, roomId);
    res.json({ data });
  } catch (error) {
    res.send(error);
  }
});
router.post("/:roomId/leave", async (req: Request, res: Response) => {
  const { roomId } = req.params;

  try {
    const data = await RoomService.leaveRoom(req.user?._id, roomId);
    res.json({ data });
  } catch (error) {
    res.send(error);
  }
});

router.get("/chat-rooms/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.send({ data: RoomService.getRoom(id) });
  } catch (error) {
    res.send(error);
  }
});

export default router;
