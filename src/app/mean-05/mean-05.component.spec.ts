import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mean05Component } from './mean-05.component';

describe('Mean05Component', () => {
  let component: Mean05Component;
  let fixture: ComponentFixture<Mean05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mean05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mean05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
