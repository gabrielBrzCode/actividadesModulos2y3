import express from "express";
import dotenv from "dotenv";
//variables de entorno con DOTENV
import cors from "cors";
 import { conectionMongo } from "./config/dataBase.js"; 


2.// configuraciones

const app = express();

dotenv.config();


//cors es un middleware o mesero jeje -> intermediario

app.use(cors());

const port = process.env.PORT ;


conectionMongo();



app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en: http://localhost:${port}`);
});