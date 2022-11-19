const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, 'yohanes anjar', (err, decoded) => {
            if (err) {
                console.log(err.message);
                res.send('invalid token');
            } else {
                req.userId = decoded.id
                next();
            }
        })
    }
    else {
        res.send('tidak ada token')
    }
};

const isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if(err){
            res.status(500).send({ message: 'error' })
        }
        if(user.status == 'admin'){
            next();
        }else{
            res.status(401).send({ message: 'anda bukan admin' })
        }
    })
}
module.exports = { requireAuth, isAdmin };