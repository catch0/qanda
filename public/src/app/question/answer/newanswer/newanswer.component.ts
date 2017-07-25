import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService } from '../answer.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {
  @Input() answer;
  @Output() updateQuestionEvent = new EventEmitter;
  newAnswer = { question: '', user: {} };

  constructor(private _answerService:AnswerService, private _userService:UserService) { }

  createComment(){
    this.newAnswer.question = this.question._id;
    let user = this._userService.getCurrentUser();
    console.log(user);
    this.newAnswer.user = user;
    return this._answerService.create(this.newAnswer)
    .then(comment => this.updateQuestion())
    .catch(err => console.log(err));

  }

  updateMessage(){
    this.updateMessageEvent.emit()
  }

  ngOnInit() {

  }

}
