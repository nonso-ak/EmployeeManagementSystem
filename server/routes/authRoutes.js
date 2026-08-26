import { Router } from "express";
import { changePassword, session } from "../controllers/authController";


const authRouter = Router();

authRouter.post("/login", login)
authRouter.get("/session", protect, session)
authRouter.post("/change-password", protect, changePassword)

export default authRouter;