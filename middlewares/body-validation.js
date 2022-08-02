const bodyValidation = (yupValidator)=>{
    return async (req, res, next)=>{
        try{
            const validData = await yupValidator.noUnknown().validate(req.body, {abortEarly: false});
            req.body = validData;
            next();
        }
        catch(e){
            return res.send('marche vraiment pas')
        }
    }
}

module.exports = bodyValidation;