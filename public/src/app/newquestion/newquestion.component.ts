import { Component, OnInit, Input } from '@angular/core';
import{ UserService} from '../user.service';
import {QuestionService} from '../question.service';
import {Router} from '@angular/router';
import {AnswerService} from '../answer.service';

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
 errors:String[] = [];

  constructor(private _userService:UserService, private _questionService:QuestionService, private router:Router) {
    // this.setCurrentUser();
    // this._userService.show(this.currentUser._id)
    // .then(user=>{this.currentUser=user;})
    // .catch(err=>{console.log(err);});
    // console.log(this.currentUser);
    this.isLoggedIn();
   }

  ngOnInit() {
    this.setCurrentUser();
  }

  getQuestion(){
    return this._questionService.getQuestions()
    .then(questions=> this.questions = questions)
    .catch(err=> console.log(err));
  }

  createQuestion(newQuestion){
    this.newQuestion.user = this.currentUser._id;
    return this._questionService.create(this.newQuestion)
    .then(question => {
      if(question.errors){
        console.log('awwwwww sheeeeet!!!!!');
        for(let key in question.errors){
          let error = question.errors[key];
        this.errors.push(error.message)
        }
      }
      else{
        console.log('new question');
        console.log(question);
        // this.getQuestion();
        this.router.navigateByUrl('dashboard');
      }
    })
    .catch(err => console.log(err));
  }

  setCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }

logout(){
  this._userService.logout();
  this.router.navigateByUrl('/');
}

isLoggedIn(){
  if(this._userService.getCurrentUser()==null){
    this.router.navigateByUrl('/');
  }
}

}
