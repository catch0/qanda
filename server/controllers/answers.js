let mongoose = require('mongoose');
let User = mongoose.model('User');
let Question = mongoose.model('Question');
let Answer = mongoose.model('Answer');

class AnswersController {
    create(req, res){
        Comment.create(req.body, (err, comment) => {
            Message.findByIdAndUpdate(req.body.message, { $push: { answers: answer._id } }, { new: true }, (err, message) => {
                if(err) { return res.json(err) }
                User.findByIdAndUpdate(req.body.user, { $push: { answers: answer._id } }, { new: true }, (err, user) => {
                    if(err) { return res.json(err) }
                    return res.json(comment)
                })
            })
        })
    }
}

module.exports = new AnswersController();
