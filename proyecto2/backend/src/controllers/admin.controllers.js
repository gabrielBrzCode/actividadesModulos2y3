import { adminModel } from "../models/admin.models.js";


// peticion POST para crear administradores
export const postAdmin = async (request, response) => {
    try{
const {nombreCompleto, correo, contrasena} = request.body;
        const newAdmin = await adminModel.create({
nombreCompleto,
correo,
contrasena, 
categoriaAdmin: true


        });
     return response.status(201).json({
    estado: "201",
    mensaje: "Admin creado correctamente",
    datos: newUser
    
     })
    
    }catch(error){
    return response.status(400).json({
    estado: "400",
    mensaje: "Ocurrió un problema al crear un administrador",
    datos: error
    })
    }
       
   }
   
   // mostrar todos los administradores
   
   export const getAdmin = async (request, response) => {
    try{
        // -> encontrar ->find
        const allAdmins = await adminModel.find();
        if(allAdmins.length === 0){
    return response.status(200).json({
    
        estado: "200",
        mensaje: "no se encontraron administradores en la base de datos",
        datos: null
    })
    
        }
        return response.status(200).json({
    
            estado: "200",
            mensaje: "estos son todos los administradores encontrados",
            cantidadAdmins: allAdmins.length,
            admins: allAdmins
        
        })
       }catch(error){
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al obtener los administradores",
            datos: error
            })
    
       }
       
      
      }
   
      // eliminar un solo administrador
      export const deleteAdminById = async (req, res) => {
       return res.send("Funciona la peticion DELETE de un solo ADMIN")
      
      }
   