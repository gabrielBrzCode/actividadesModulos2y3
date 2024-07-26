import {Router} from "express";
import { getAdmin, postAdmin, deleteAdminById } from "../controllers/admin.controllers.js";

const adminRouter = Router();

adminRouter.get("/", getAdmin);
adminRouter.post("/", postAdmin);
adminRouter.delete("/:id", deleteAdminById);

export default adminRouter;
