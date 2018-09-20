import { Component, OnInit, ComponentRef, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver, EventEmitter } from '@angular/core';
import * as StateMachine from 'javascript-state-machine';
import * as _ from 'lodash';
import { connectViaExtension } from 'remotedev';

import states from '../../data/states';
import { transitions, transitionTypes, rules } from '../../data/transitions';
import quizzes from '../../data/quizzes';
import { Quiz } from '../../data/quizzes';
import { stateToComponent } from '../../data/components';

import { Mean01Component } from '../mean-01/mean-01.component';
import { Mean02Component } from '../mean-02/mean-02.component';
import { Mean03Component } from '../mean-03/mean-03.component';
import { Mean04Component } from '../mean-04/mean-04.component';
import { Mean05Component } from '../mean-05/mean-05.component';
import { Mean06Component } from '../mean-06/mean-06.component';
import { Mean07Component } from '../mean-07/mean-07.component';
import { MenuComponent } from '../menu/menu.component';
import { WinComponent } from '../win/win.component';

interface QuizComponent {
  quiz: Quiz;
  onCheckAnswer: EventEmitter<any>;
  onRightAnswer: EventEmitter<any>;
  onWrongAnswer: EventEmitter<any>;
}

@Component({
  selector: 'app-fsm',
  templateUrl: './fsm.component.html',
  styleUrls: ['./fsm.component.css']
})
export class FsmComponent implements OnInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef }) 
  container: ViewContainerRef;

  componentRef: ComponentRef<QuizComponent>;

  quiz: Quiz;

  fsm;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { 
    const remotedev = connectViaExtension();
    this.fsm = new (<any> StateMachine)({
      transitions: transitions,
      methods: {
        onAfterTransition: (event) => {
          remotedev.send({
            type: _.upperCase(event.transition),
            payload: event 
          }, event.fsm.state);
        }, 
        onInvalidTransition: (transition, from, to) => {
          console.error(`unknown transitition: ${transition} from state: ${from}`);
        },
        [`onBefore${_.capitalize(transitionTypes.RETRY)}`]: () => {
          this.quiz.newData();
        },
        onEnterState: (event) => {
          this.destroyComponent.bind(this)();
          this.selectQuiz.bind(this)();
          this.renderComponent.bind(this)();
        },
      }
    });

  }

  ngOnInit() {
    this.fsm.init();
  }

  renderComponent() {
    const component = stateToComponent[this.fsm.state];
    if(!component) {
      console.error(`No Component defined for state ${this.fsm.state}`);
      return;
    }
    const factory = this.componentFactoryResolver.resolveComponentFactory(component); 
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.quiz = this.quiz;
    this.componentRef.instance.onWrongAnswer.subscribe(rules.onWrongAnswer.bind(rules, this.fsm));
    this.componentRef.instance.onRightAnswer.subscribe(rules.onRightAnswer.bind(rules, this.fsm));
  }

  destroyComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  ngOnDestroy() {
    this.destroyComponent();
  } 
  
  selectQuiz() {
    this.quiz = quizzes[this.fsm.state];
  }
}
