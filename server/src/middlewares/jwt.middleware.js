const jwt = require('jsonwebtoken');

/**
 * Ao criar um middleware, a primeira coisa que temos que fazer é determinar um header
 * para ser lido no frontend.
 */

function verifyJWT(req, res, next) {
    const token = req.headers['authorization']; //Determina um header
    if (!token) return res.status(401).json({auth:false}); //Caso não existe header

    jwt.verify(token, process.env.SECRET, (err, decoded) => { //Verifica se o token inserido no header condiz com o secret
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        req.userId = decoded.id; //userId recebe o que foi decodificado, no caso um id
        next();
    })
   console.log(token)
}

module.exports = {
    verifyJWT: verifyJWT
} 
    

