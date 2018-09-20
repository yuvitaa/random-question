import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mean07Component } from './mean-07.component';

describe('Mean07Component', () => {
  let component: Mean07Component;
  let fixture: ComponentFixture<Mean07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mean07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mean07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
