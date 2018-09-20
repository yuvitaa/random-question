import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mean03Component } from './mean-03.component';

describe('Mean03Component', () => {
  let component: Mean03Component;
  let fixture: ComponentFixture<Mean03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mean03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mean03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
