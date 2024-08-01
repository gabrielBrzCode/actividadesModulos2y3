// los midlewares son intermediarios entre la peticion del cliente y los controladores que obtienen la respuesta del servidor

import { verifyToken } from "../lib/jwt.js";



// // middleware debe tener request, response y metodo next
// const auth = (req, res, next) =>{


// }

// esta es la opcion para gestionar DIFERENTES ROLES
const auth = (requiredRole) =>{

return async (req, res, next) =>{

    let token = req.headers["authorization"];

    if(!token){
return res.status(401).json({
    mensaje: " no se encontro token"
});

    }
next();
}


}

export default auth;