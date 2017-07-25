import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {QuestionComponent} from './question/question.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent},
    { path: 'dashboard', component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
