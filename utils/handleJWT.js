const jwt = require("jsonwebtoken")
const jwt_secret = process.env.jwt_secret

// Se le puede pasar el tiempo, como para que el token expire en una operación sensible en menor tiempo
const tokenSign = async(user) => {
    return jwt.sign(user, jwt_secret, {expiresIn: '1h'})
}

const tokenVerify = async(token) => {
    try{
        return jwt.verify(token, jwt_secret)
    } catch(error){
        return error
    }
}

module.exports = {tokenSign, tokenVerify}