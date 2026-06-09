import { Router } from "express";
import { SessionController } from "../controllers/auth/SessionUserController";
import { CreateController } from "../controllers/auth/CreateUserController";

const router = Router();

router.post("/login", SessionController.loginUser);
router.post("/create", CreateController.create);

export default router;
