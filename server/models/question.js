let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
  question: {type: String, min: [10, 'question needs to be at least 10 charachters ']},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true})

mongoose.model('Question', QuestionSchema);
