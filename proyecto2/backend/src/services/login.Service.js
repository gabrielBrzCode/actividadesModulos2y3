import { userModel } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import {generateToken} from "../lib/jwt.js"

// necesitamos una funcion para la validacion de usuarios y la generacion de tokens

export const loginService = async (req, res) => {
    try {
        const { } = req.body

        //estas son las credenciales que ingresamos en el formulario de ingreso
        //y vamos a verificar que esten en la base de datos
        const { email, password } = req.body;

        // buscar en la base de datos si existe ese mail
        const userFound = await userModel.findOne({
            correo: email
        });
        // validacion en caso de que no se encuentre usuaruo con ese email

        if (!userFound) {
            return res.status(404).json({
                mensaje: " no se encontraron usuarios con este email, por favor registrarse"
            })
        }

        // comparamos password con la contraseña guardada en la base de datos
        // comparamos password con la contraseña guardada en la base de datos
        const isValidPassword = await bcrypt.compare(password, userFound.contrasena);


        // validar si la contraseña es correcta

        if (!isValidPassword) {
            return res.status(400).json({
                estado: "400",
                mensaje: " error al iniciar sesion, contraseña incorrecta"
            });
        }





        //---------------------------------AUTENTICACION------------------------------------------------
        // crear nuestro PAYLOAD -> info del usuario que pasemos para crear el token
        // los datos son de el usuario encontrado que lo estoy guardando en userFound

        const payload = {
            id: userFound._id,
            name: userFound.nombreCompleto,

        }
        // vakudar si mi usuario ingresado es administrador

        if (userFound.categoriaAdmin) {
            payload.isAdmin = true;
        }

        // GENERAR NUESTRO TOKEN

        const token = await generateToken(payload);

        // si se inicio sesion correctamente con credenciales correctas y se creo un token

        return res.status(200).json({
            estado: "200",
            mensaje: "Inicio de sesion exitoso",
            tokenGenerado: token
        });

    } catch (error) {
        return res.status(400).json({
            estado: "400",
            mensaje: "Hubo un error al intentar iniciar sesion",
            error: error.message
        });
    }


}
