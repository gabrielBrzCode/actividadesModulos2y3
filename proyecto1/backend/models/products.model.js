// importacion mongoose nos permite la conexion directa con la base de datos.-> Schema-> plantilla de los productos
import mongoose from "mongoose";
// el mongoose.Schema crea nuestro esquema
const schema = mongoose.Schema;
// definimos de que manera se mostraran los productos

//estructurando como se va a guardar la informacion de los productos en nuestra base de datos
const productSchema = new schema({
nombre:{
    //tipo de dato
    type: String,
    require: true
},
imagen:{
    type: String

},
precio:{
type: Number,
require:true

},
modelo:{
    type: String,

}

});
//utilizamos esa plantilla para crear nuestro modelo-> creamos la coleccion donde se van a guardar los datos

//mongoose.model se usa para crear nuestro modelo
//1. nombre de la coleccion que me va a guardar los datos
//2. necesitamos darle como parametro el schema que hicimos

 export const productModel = mongoose.model("usuario", productSchema);
