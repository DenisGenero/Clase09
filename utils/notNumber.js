const notNumber = (id, next) =>{
    if (isNaN(+id)) {
        let error = new Error("id must be an integer")
        error.status = 400
        next (error)
        return true
    } else {
        return false
    }
}

module.exports = notNumber