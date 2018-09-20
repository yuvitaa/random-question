import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsmComponent } from './fsm.component';
import { Mean01Component } from '../mean-01/mean-01.component';
import { Mean02Component } from '../mean-02/mean-02.component';
import { Mean03Component } from '../mean-03/mean-03.component';
import { Mean04Component } from '../mean-04/mean-04.component';
import { Mean05Component } from '../mean-05/mean-05.component';
import { Mean06Component } from '../mean-06/mean-06.component';
import { Mean07Component } from '../mean-07/mean-07.component';
import { MenuComponent } from '../menu/menu.component';
import { WinComponent } from '../win/win.component';
import { FormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ 
    FsmComponent,
    MenuComponent,
    WinComponent,
    Mean01Component,
    Mean02Component,
    Mean03Component,
    Mean04Component,
    Mean05Component,
    Mean06Component,
    Mean07Component
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  entryComponents: [
    MenuComponent,
    WinComponent,
    Mean01Component,
    Mean02Component,
    Mean03Component,
    Mean04Component,
    Mean05Component,
    Mean06Component,
    Mean07Component
  ]
})
class TestModule {}

describe('FsmComponent', () => {
  let component: FsmComponent;
  let fixture: ComponentFixture<FsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
