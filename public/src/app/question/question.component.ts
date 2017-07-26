import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import {AnswerService} from '../answer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  currentUser = { _id: '' };
  newQuestion = { user: '' };
  questions:any[] = [];
  question: '';
  @Input() Question;
  user= {name: ''};
  constructor(private _userService:UserService, private _questionService:QuestionService) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getQuestions();
  }

  getQuestions(){
    return this._questionService.getQuestions()
    .then(questions => this.questions = questions)
    .catch(err => console.log(err));
  }

  createQuestion(){
    this.newQuestion.user = this.currentUser._id;
    return this._questionService.create(this.newQuestion)
    .then(question => {
      if(question.errors){
        //display error messages
      } else {
        console.log('new msg: ', question);
        this.getQuestions();
      }
    })
    .catch(err => console.log(err));
  }

  setCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }

logout(){
  this._userService.logout();
  // this.route.navigatebyUrl('/');
}

}
