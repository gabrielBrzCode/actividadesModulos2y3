import {Router} from "express";
import { getAdmin, postAdmin, deleteAdminById } from "../controllers/admin.controllers.js";
import auth from "../middlewares/auth.js";
const adminRouter = Router();

adminRouter.get("/", auth(), getAdmin);
adminRouter.post("/", postAdmin);
adminRouter.delete("/:id", auth(), deleteAdminById);

export default adminRouter;
