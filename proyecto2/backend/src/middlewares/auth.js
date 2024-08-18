// Los middlewares son intermediarios entre la petición del cliente y los controladores que obtienen la respuesta del servidor

import { verifyToken } from '../lib/jwt.js'

// Middeleware debe tener request, response y método next
// const auth = (req, res, next) => {

// }

// ESTA ES LA OPCIÓN PARA MANEJAR DIFERENTES ROLES
const auth = (requiredRole) => {

    return async (req, res, next) =>{

        // validación de que efectivamente se pasó un token
        let token = req.headers['authorization'];
        if(!token){
            return res.status(401).json({
                mensaje: 'No se encontró token'
            })
        } 
        
        //Vamos a extraer el token que necesitamos, quitando la parabra Bearer que hay antes
        token = token.split(" ")[1];
        if(!token){
            return res.status(400).json({
                mensaje: 'Token no autorizado'
            })
        }
        
        // VERIFICACIÓN DEL TOKEN
        try {

            // se decodifica el token
            const decoded = await verifyToken(token);
            console.log('token decodificado: ', decoded);

            // validación de rol
            // Si la ruta requiere rol === admin PERO no tiene en el token la característica de Admin = true
            if(requiredRole === 'admin' && !decoded.isAdmin){
                return res.status(403).json({
                    mensaje: 'Acceso denegado, no tiene permisos de administrador'
                });
            }

            req.user = decoded;

        } catch (error) {

            return res.status(401).json({
                mensaje: 'Falló la autenticación con el token, token invalido',
                error: error.message || error
            });
            
        }
        
        
        // indica que debe continuar con el siguiente intermediario o controlador
        next();

    }

}



export default auth;