let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
  question: {type: String},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true})

mongoose.model('Question', QuestionSchema);
