import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Quiz } from '../../data/quizzes';

enum UserAnswer {
  NONE,
  TRUE,
  FALSE
}

const INITIAL_USER_ANSWER = UserAnswer.NONE;

const INITIAL_ANSWER = 0.0;

@Component({
  selector: 'app-mean-01', 
  templateUrl: './mean-01.component.html',
  styleUrls: ['./mean-01.component.css']
})
export class Mean01Component implements OnInit {
  @Input() quiz: Quiz;
  @Output() onCheckAnswer: EventEmitter<any> = new EventEmitter();
  @Output() onRightAnswer: EventEmitter<any> = new EventEmitter();
  @Output() onWrongAnswer: EventEmitter<any> = new EventEmitter();
  hintUsed= false;



  answer = INITIAL_ANSWER;

  UserAnswer = UserAnswer; // hack to use enum in template
  userAnswer: UserAnswer = INITIAL_USER_ANSWER;

  closeResult: string;

  //open hint//
  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = ` ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return ' ';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {

  }

  checkAnswer(answer) {
    this.checkAnswer && this.onCheckAnswer.emit(Number(answer));
    if (this.quiz.checkAnswer(Number(answer))) {
      this.userAnswer = UserAnswer.TRUE;
    } else {
      this.userAnswer = UserAnswer.FALSE;
    }
  }

  rightAnswer(answer, hintUsed) {
    this.onRightAnswer && this.onRightAnswer.emit({
      //Number(answer)),
      hintUsed: hintUsed,

    });
    this.userAnswer = INITIAL_USER_ANSWER;
    this.answer = INITIAL_ANSWER;
  }

  wrongAnswer(answer, hintUsed) {
    this.onWrongAnswer && this.onWrongAnswer.emit( {
      answew: Number(answer),
      hintUsed: hintUsed,
    });
    // Number(answer)),
    this.userAnswer = INITIAL_USER_ANSWER;
    this.answer = INITIAL_ANSWER;
  }

 showHint() {
    this.hintUsed = true;
  }

  
}
