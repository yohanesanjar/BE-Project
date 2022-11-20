const Video = require('../models/Video')

module.exports.video_get = (req, res) => {
    Video.find()
    .then(response => {
        res.status(200).json({
            response
        })
    })
    .catch(error => {
        res.json.status(400).send({
            message: 'An error Occured!'
        })
    })
}

module.exports.video_get_id = (req, res, next) => {
    Video.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            video:result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            message: 'id tidak ada'
        })
    })
}

module.exports.video_post = (req, res) => {
    let video = new Video({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link
    })
    video.save()
    .then(response => {
        res.status(200).json({
            message: 'Success'
        })
    })
    .catch(error => {
        res.status(400).json({
            message: 'ERROR'
        })
    })   
}

module.exports.video_edit = (req, res, next) => {
    // console.log(req.params.id);
    Video.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            title:req.body.title,
            description:req.body.description,
            link:req.body.link
        }
    })
    .then(result => {
        res.status(200).json({
            updated_video: result
        })
    })
    .catch(err => {
        res.status(400).json({
            message: 'tidak bisa update'
        })
    })
}

module.exports.video_delete = (req, res, next) => {
    Video.remove({_id: req.params.id})
    .then(result => {
        res.status(200).json({
            message: 'video berhasil dihapus',
            result:result
        })
    })
    .catch(err => {
        res.status(400).json({
            message: 'tidak ada video'
        })
    })
}