import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mean02Component } from './mean-02.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import quizzes from './../../data/quizzes';
import states from './../../data/states';

describe('Mean02Component', () => {
  let component: Mean02Component;
  let fixture: ComponentFixture<Mean02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mean02Component ],
      imports: [
        FormsModule,
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mean02Component);
    component = fixture.componentInstance;
    component.quiz = quizzes[states.MEAN02]; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
