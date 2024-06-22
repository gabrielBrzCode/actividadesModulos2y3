//1. importamos las dependencias y modulos que necesitamos
import express from "express";
import dotenv from "dotenv";
//Variables de entorno -> nos guardan informacion delicada
import { connexionMongo } from "./config/database.js";
import productsRouter from "./routes/products.routes.js";

// 2. configurar el uso de nuestro servidor y de nuestras varialbles de

const app = express();// configuramos nuestro servidor
dotenv.config(); // configuramos nuestras variables de entorno
const port = process.env.PORT;

//conectese a la base de datos
connexionMongo();

//usamos rutas
app.use("/", productsRouter);

//3. escuchar nuestro servidor (ejecutarlo)
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en: http://localhost:${port}`);
});