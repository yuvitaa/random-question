import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { Mean01Component } from './mean-01/mean-01.component';
import { FsmComponent } from './fsm/fsm.component';
import { components } from '../data/components';

@NgModule({
  declarations: [
    AppComponent,
    // Mean01Component,
    FsmComponent,
    ...components
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  entryComponents: [
    // Mean01Component
    ...components
  ]
})
class TestModule {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule
      ]
    }).compileComponents();
  }));
  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  xit(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
