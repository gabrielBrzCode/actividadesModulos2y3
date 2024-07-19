import mongoose from "mongoose";
import { userModel } from "./user.models.js";


const adminSchema = new mongoose.Schema({
categoriaAdmin: {
    type: Boolean,
    required : true,
    default : true
}



});
// Mongoose tiene un metodo "discriminator" -> nos va a permitir crear un modelo de administrador pero basado en otro modelo


export const adminModel = userModel.discriminator("Admin",adminSchema)