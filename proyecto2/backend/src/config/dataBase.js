import mongoose from "mongoose"

//funcion flecha 


export async function conectionMongo (){
    try{
        await mongoose.connect(process.env.URL_DATABASE,{})
        console.log("Conexión exitosa con la base de datos")

    }catch(error){

       console.error("error de conexión:", error)
    }
}