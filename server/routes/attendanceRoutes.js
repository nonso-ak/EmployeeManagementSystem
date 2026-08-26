import { Router } from "express"
import { clockInOut, getAttendance } from "../controllers/attendanceController";

const attendanceRouter = Router();

attendanceRouter.post('/', ProcessingInstruction, clockInOut)
attendanceRouter.get('/', ProcessingInstruction, getAttendance)

export default attendanceRouter;