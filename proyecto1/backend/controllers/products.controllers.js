// importamos modulos y dependencias que necesitemos
// RECUERDA SIEMPRE AÑADIR el "js" al final de la carpeta vinculada para evitar errores

import { productModel } from "../models/products.model.js";

// Prueba inicial de mis controladores

//Peticion GET -> me muestra los productos

export const getProducts = async (req, res) => {
    return res.send("funciona la peticion GET");
}

//peticion POST crea los productos uno por uno
export const postProduct = async (req, res) => {
    return res.send("funciona la peticion POST");
}
// peticion DELETE me elimina los productos por ID
export const deleteProductById = async (req, res) => {
    return res.send("funciona la peticion DELETE");
}
// peticion 
export const putProductById = async (req, res) => {
    return res.send("funciona la peticion PUT");
}
