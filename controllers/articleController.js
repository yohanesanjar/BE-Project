const Article = require('../models/Article')

module.exports.article_get = (req, res) => {
    Article.find()
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

module.exports.article_get_id = (req, res, next) => {
    Article.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            article:result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            message: 'id tidak ada'
        })
    })
}


module.exports.article_post = (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description
    })
    article.save()
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

module.exports.article_edit_put = (req, res, next) => {
    // console.log(req.params.id);
    Article.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            title:req.body.title,
            description:req.body.description
        }
    })
    .then(result => {
        res.status(200).json({
            updated_article: result
        })
    })
    .catch(err => {
        res.status(400).json({
            message: 'tidak bisa update'
        })
    })
}

module.exports.article_delete = (req, res, next) => {
    Article.remove({_id: req.params.id})
    .then(result => {
        res.status(200).json({
            message: 'article berhasil dihapus',
            result:result
        })
    })
    .catch(err => {
        res.status(400).json({
            message: 'tidak ada article'
        })
    })
}