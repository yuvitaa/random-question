//import { Component, OnInit } from '@angular/core';

//@Component({
  //selector: 'app-mean-05',
  //templateUrl: './mean-05.component.html',
  //styleUrls: ['./mean-05.component.css']
//})
//export class Mean05Component implements OnInit {

  //constructor() { }

  //ngOnInit() {
  //}

//}

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
  selector: 'app-mean-05',
  templateUrl: './mean-05.component.html',
  styleUrls: ['./mean-05.component.css']
})
export class Mean05Component extends Mean01Component {
 
}

