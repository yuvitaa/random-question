import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mean06Component } from './mean-06.component';

describe('Mean06Component', () => {
  let component: Mean06Component;
  let fixture: ComponentFixture<Mean06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mean06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mean06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
