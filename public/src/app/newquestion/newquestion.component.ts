import { Component, OnInit, Input } from '@angular/core';
import{ UserService} from '../user.service';
import {QuestionService} from '../question.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
  currentUser = { _id: '' };
 newQuestion = { user: '' };
 questions:any[] = [];
 question: '';
 @Input() Quesiton;
 user= {name: ''};

  constructor(private _userService:UserService, private _questionService:QuestionService, private router:Router) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getQuestions();
    this.createQuestion();
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
        console.log('new question: ', question);
        this.getQuestions();
        this.router.navigateByUrl('question');
      }
    })
    .catch(err => console.log(err));
  }

  setCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }

}
