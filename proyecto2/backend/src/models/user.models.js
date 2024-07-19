import mongoose from "mongoose"




// require -> una dependencia
// required -> atributo de mi esquema -> ese dato debe ser asignado




const userSchema = new mongoose.Schema({
 nombreCompleto:{
    type: "String",
    required : true
 },

 correo:{
    type: String,
    required : true,
    unique:true
 },

 contraseña:{
    type:String,
    required : true,

 },

 imagen: {

    type: String,
 }


});




export const userModel = mongoose.model("usuario", userSchema);