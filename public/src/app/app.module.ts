import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './question/answer/answers.component';
import { NewAnswerComponent } from './question/answer/newanswer/newanswer.component';
import {NewquestionComponent} from './newquestion/newquestion.component';

//Services
import { UserService } from './user.service';
import { QuestionService } from './question.service';
import { AnswerService } from './answer.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionComponent,
    AnswerComponent,
    NewAnswerComponent,
    NewquestionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
    QuestionService,
    AnswerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
