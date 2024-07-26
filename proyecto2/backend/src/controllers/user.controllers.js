import { userModel } from "../models/user.models.js";

// peticion POST para crear usuarios
export const postUser = async (request, response) => {

try{

    const newUser = await userModel.create(request.body);
 //.save tambien sirve como metodo create
 
 
    return response.status(201).json({
estado: "201",
mensaje: "Usuario creado correctamente",
datos: newUser

 })

}catch(error){
return response.status(400).json({
estado: "400",
mensaje: "Ocurrió un problema al crear un usuario",
datos: error
})
}


}

// mostrar todos los usarios

export const getUsers = async (request, response) => {


   try{
    // -> encontrar ->find
    const allusers = await userModel.find();
    if(allusers.length === 0){
return response.status(200).json({

    estado: "200",
    mensaje: "no se encontraron usuarios en la base de datos",
    datos: null
})

    }
    return response.status(200).json({

        estado: "200",
        mensaje: "estos son todos los usuarios encontrados",
        cantidadUsuarios: allusers.length,
        usuarios: allusers
    
    })
   }catch(error){
    return response.status(400).json({
        estado: "400",
        mensaje: "Ocurrió un problema al obtener los usuarios",
        datos: error
        })

   }
   
   }

   // Mostrar un solo usuario
   export const getUserById = async (request, response) => {
     try {
// establecer cual es el parametro
let idForGet = request.params._id;
// -> encontrar -> find()
let userById = await userModel.findById(idForGet);
//validacion cuando no se encuentra el usuario buscado
if(!userById){

    return response.status(200).json({
        estado: "200",
        mensaje: "No se encontro ese usuario",


    })
}
    return response.status(200).json({
estado:"200",
mensaje: " se encontro el usuario buscado",
usuario: userById

    })


     } catch (error) {  return response.status(400).json({
        estado: "400",
        mensaje: "Ocurrió un problema al obtener los usuarios",
        datos: error
        })

   }
        
     }
   


   //actualizar usauario


   export const putUserById = async (req, res) => {
    try {
        
        let idForPut = request.params._id;

        const dataForUpdate = request.body;

        const userUpdated = await userModel.findByIdAndUpdate(idForPut,dataForUpdate)



// TAREA: agregue VALIDACIONES QUE CONSIDEREN NECESARIAS

return response.status(200).json({
    estado: "200",
    mensaje: " se actualizo correctamente",
    datos: userUpdated
})


    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al obtener los usuarios",
            datos: error
            })
        
    }
   
   }

   // eliminar usuario

   export const deleteUserById = async (req, response) => {
try{
    let idForDelete = req.params._id;
    let productDeleted = await userModel.findByIdAndDelete(idForDelete);
    
    // validaciones
    
    
    return response.status(201).json({
        estado: "201",
        mensaje: "Usuario eliminado correctamente"})

}catch(error){ return response.status(400).json({
    estado: "400",
    mensaje: "Ocurrió un problema al eliminar el usuario",
    datos: error
    })


}   
   }