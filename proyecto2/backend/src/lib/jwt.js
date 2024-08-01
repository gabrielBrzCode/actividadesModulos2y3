// importar dependencias
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
//2. configuarar cuál va a ser nuestra clave secreta


const secretKey = process.env.JWT_SECRET 


// 3. estructurar las funciones para generar y verificar JWT

// Función para generar tokens (JWT)
export function generateToken (payload) {
    // nosotros vamos a configurar de una vez esta función para que sea asincrónica
    return new Promise((resolve, reject)=>{
        // para generarlo necesitamos payload, clave secreta, tiempo de expiración
        // Además, le voy a decir cómo debe trabajar con los errores y aciertos
        jwt.sign(payload, secretKey, {expiresIn: '1h'}, (error, token)=>{
            // validaar si hay error al generar token
            if(error){
                // le decimos qué pasa si todo sale mal
                reject(new Error('Error al generar JWT'+ error.message));
            }else{
                // le decimos qué pasa si todo bien
                resolve(token);
            }
        });
    });
}

// Función para verificar tokens (JWT)
export function verifyToken(token) {

    return new Promise((resolve, reject)=>{
        jwt.verify(token, secretKey, (error, decoded)=>{
        // validando decodificación
            if(error){
                // le decimos qué pasa si todo sale mal
                reject(new Error('Error al decodificar JWT', error.message));
            }else{
                // le decimos qué pasa si todo bien
                resolve(decoded);
            }
        });

    });

}




