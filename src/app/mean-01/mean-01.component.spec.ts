import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mean01Component } from './mean-01.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import quizzes from '../../data/quizzes';
import states from '../../data/states';

describe('Mean01Component', () => {
  let component: Mean01Component;
  let fixture: ComponentFixture<Mean01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mean01Component ],
      imports: [
        FormsModule,
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mean01Component);
    component = fixture.componentInstance;
    component.quiz = quizzes[states.MEAN01]; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
