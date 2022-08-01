const mongoose = require('mongoose');

const idValidator = () => {
    return (req, res, next)=>{
        const id = req.params.id;
        if(!mongoose.isValidObjectId(id)){
           return res.send('Invalide ID');
        }
        next();
    }
}

module.exports = idValidator;