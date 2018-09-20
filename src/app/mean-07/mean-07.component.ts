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
  selector: 'app-mean-07',
  templateUrl: './mean-07.component.html',
  styleUrls: ['./mean-07.component.css']
})
export class Mean07Component extends Mean01Component {
  
}
