const jwt = require('jsonwebtoken')


const Authorization = (req, res, next) => {
    console.log("Authorization middleware is triggered")
    console.log(req.headers)
    let token = req.headers['token'] || req.headers['authorization'];
    console.log(token)
    if (token) {

        jwt.verify(token,'renteasy',(err, decoded) => {
            if (err) {
                console.log(err)
                return res.json({
                    success: false,
                    message: err.message
                });
            } else {
                req.user_id = decoded.user_id
                next()
            }
        });
    }else{
        res.send({Message:"Authentication failed Please Do Sign in!!!"})
    } 
}

module.exports =Authorization