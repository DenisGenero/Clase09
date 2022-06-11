const {check, validationResult} = require("express-validator")

const validatorCreatePost = [
    check("title")
    .exists().withMessage("Field title must exist")
    .notEmpty().withMessage("Field title must not be empty")
    .isLength({min:3, max: 124}).withMessage("min: 3, max: 124"),
    
    check("body")
    .exists().withMessage("Field body must exist")
    .notEmpty().withMessage("Field body must not be empty"),

    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) res.status(400).send({errors: err.array()})
        else next()
        // try{
        //     validationResult(req).throw()
        //     return next()
        // } catch(error){
        //     res.status(400).send({errors: error.array()})
        // }
    }
]

module.exports = {validatorCreatePost}