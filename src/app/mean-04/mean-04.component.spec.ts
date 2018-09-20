import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mean04Component } from './mean-04.component';

describe('Mean04Component', () => {
  let component: Mean04Component;
  let fixture: ComponentFixture<Mean04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mean04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mean04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
