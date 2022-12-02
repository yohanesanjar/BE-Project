const User = require('../models/User');

module.exports.user_get = (req, res) => {
    User.find()
    .then(data => {
        res.status(200).json({
            response: 'success',
            data
        })
    })
    .catch(error => {
        res.status(400).json({
            message: 'An error Occured!'
        })
    })
}

module.exports.user_get_id = (req, res) => {
    User.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            user: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            message: 'user tidak ditemukan'
        })
    })
}

module.exports.user_edit = async (req, res) => {
    
    const { full_name, username, password, email, status } = req.body;
    try{
        const user = await User.findByIdAndUpdate({_id: req.params.id}, {$set: { full_name, username, password, email, status}})
        res.status(200).json({
            user: 'Berhasil update user '+user._id
        })
    }
    catch (err) {
        res.status(400).json({
            message: 'tidak bisa update'
        })
    }
}

module.exports.user_delete = (req, res) => {
    User.remove({_id: req.params.id})
    .then(result => {
        res.status(200).json({
            message: 'user berhasil dihapus',
            result:result
        })
    })
    .catch(err => {
        res.status(400).json({
            message: 'tidak ada article'
        })
    })
}