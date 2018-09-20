import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { Mean01Component } from './mean-01/mean-01.component';
import { FsmComponent } from './fsm/fsm.component';
import { Mean02Component } from './mean-02/mean-02.component';
import { Mean03Component } from './mean-03/mean-03.component';

import { components } from '../data/components';
import { Mean04Component } from './mean-04/mean-04.component';
import { Mean05Component } from './mean-05/mean-05.component';
import { Mean06Component } from './mean-06/mean-06.component';
import { Mean07Component } from './mean-07/mean-07.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { WinComponent } from './win/win.component';



@NgModule({
  declarations: [
    AppComponent,
    FsmComponent,
    ...components,
    Mean01Component,
    Mean02Component,
    Mean03Component,
    Mean04Component,
    Mean05Component,
    Mean06Component,
    Mean07Component,
    MenuComponent,
    WinComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
    
  ],
  entryComponents: [
    ...components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
