import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quiz } from '../../data/quizzes';
import { Mean01Component } from '../mean-01/mean-01.component';

enum UserAnswer {
  NONE,
  TRUE,
  FALSE
}

const INITIAL_USER_ANSWER = UserAnswer.NONE;

const INITIAL_ANSWER = 0.0;

@Component({
  selector: 'app-mean-02',
  templateUrl: './mean-02.component.html',
  styleUrls: ['./mean-02.component.css']
})
export class Mean02Component extends Mean01Component {
  
}
