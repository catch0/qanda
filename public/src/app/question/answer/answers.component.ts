import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer;
  @Input() question;
  constructor() { }

  ngOnInit() {
  }

}
