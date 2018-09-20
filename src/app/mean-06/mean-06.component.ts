import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  selector: 'app-mean-06',
  templateUrl: './mean-06.component.html',
  styleUrls: ['./mean-06.component.css']
})
export class Mean06Component extends Mean01Component {
  
}
