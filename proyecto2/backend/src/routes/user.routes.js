// express -> Router -> permite crear rutas o endpoints
import {Router} from "express";
import { deleteUserById, getUserById, getUsers, postUser, putUserById } from "../controllers/user.controllers.js";
import auth from "../middlewares/auth.js";
const userRouter = Router();
// ruta para mostrar usuario por id
userRouter.get("/:_id", auth(), getUserById);

//ruta para mostrar todos los usarios
userRouter.get("/", auth(), getUsers);
//  ruta para crear usuarios
userRouter.post("/", postUser);
//ruta para actualizar usuarios
userRouter.put("/:_id", auth(), putUserById);
// ruta para eliminar usuarios
userRouter.delete("/:id", auth(), deleteUserById);


export default userRouter;

