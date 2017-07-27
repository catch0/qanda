import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { QuestionService } from '../../question.service';
import {AnswerService} from '../../answer.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer;
  // @Input() question;
  param_id: string;
  question={answers:[]};
  currentUser ={};


  constructor(
    private _userService:UserService,
    private _questionService:QuestionService,
    private router: Router,
    private _route: ActivatedRoute,
    private _answerService:AnswerService
  ) {
  this._route.params.subscribe(param=>this.param_id=param.id)
 }

  ngOnInit() {
    this.isLoggedIn;
    this.getQuestion();
  }

  getQuestion(){
    return this._questionService.show(this.param_id)
    .then(question => this.question = question)
    .catch(err=> console.log(err));
  }

  getCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }

  logout(){
  this._userService.logout();
  this.router.navigateByUrl('/');
  }

  increaseLikes(id:string, idx:number){
    return this._answerService.increaseLikes(id, idx)
    .then(answer=>this.question.answers[idx].likes++)
    .catch(err=>console.log(err));
    // this.router.navigateByUrl('')

  }

  isLoggedIn(){
  if(this._userService.getCurrentUser()==null){
    this.router.navigateByUrl('/');
  }
  }

}
