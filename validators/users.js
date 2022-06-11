const {check, validationResult} = require ("express-validator")

//Creamos el middleware
const validatorCreateUser = [
    check("name")
        .exists().withMessage("Name field required")
        .trim() // Sanitizador
        .notEmpty().withMessage("Must contain values")
        .isAlpha("es-ES", {ignore: " "}).withMessage("Only letters")
        .isLength({min: 2, max: 90}).withMessage("Character count: min 2, max 90"),

    check("email")
        .exists().withMessage("email field required")
        .notEmpty().withMessage("Must contain values")
        .trim() // Sanitizador
        .isEmail().withMessage("Must be a valid email address")
        .normalizeEmail(),

    check("password")
        .exists().withMessage("password field required")
        .trim()
        .notEmpty().withMessage("Must contain values")
        .isLength({min: 8, max: 16}).withMessage("Character count: min 8, max 16"),
    
    (req, res, next) => {
        try{
            validationResult(req).throw()
            return next() //si pasa las validaciones sigue hacia el controlador o hacia el siguiente middleware
        } catch (err){
            res.status(400).json({errors: err.array()})
        }
    }
]

module.exports = { validatorCreateUser }