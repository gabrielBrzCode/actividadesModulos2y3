//1. importamos las dependencias y modulos que necesitamos
import express from "express";
import dotenv from "dotenv";
//Variables de entorno -> nos guardan informacion delicada


// 2. configurar el uso de nuestro servidor y de nuestras varialbles de

const app = express();// configuramos nuestro servidor
dotenv.config(); // configuramos nuestras variables de entorno
const port = process.env.PORT;


// 3. escuchar nuestro servidor
app.listen(port, ()=>{
console.log(`estoy funcionando`)
});