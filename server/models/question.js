let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
  question: {type: String, min: [10, 'question needs to be at least 10 charachters ']},
  description:{type:String},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps:true})

mongoose.model('Question', QuestionSchema);
