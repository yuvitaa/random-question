import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-menu', 
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends Mean01Component {
  
}
