const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const pathStorage = `${__dirname}/../storage`
        callback(null, pathStorage)
    },
    filename: (req, file, callback) => {
        const ext = file.originalname.split(".").pop()
        const filename = `img-${Date.now()}.${ext}`
        callback(null, filename)
    }
})

//Creamos el middleware
const fileUpload = multer({ storage }) // Si l akey y el valor son iguales solo se pone un solo valor

module.exports = fileUpload