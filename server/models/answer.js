let mongoose = require('mongoose');

let AnswerSchema = new mongoose.Schema({
  answer:{type : String},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
  likes: {type:Number,default:0},

}, {timestamps: true});

mongoose.model("Answer", AnswerSchema);
