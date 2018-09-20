import { MenuComponent } from "../app/menu/menu.component";
import { Mean01Component } from "../app/mean-01/mean-01.component";
import { Mean02Component } from "../app/mean-02/mean-02.component";
import { Mean03Component } from "../app/mean-03/mean-03.component";


import states from './states';
import { Mean04Component } from "../app/mean-04/mean-04.component";
import { Mean05Component } from "../app/mean-05/mean-05.component";
import { Mean06Component } from "../app/mean-06/mean-06.component";
import { Mean07Component } from "../app/mean-07/mean-07.component";
import { WinComponent } from "../app/win/win.component";




export const components = [
  MenuComponent,
  Mean01Component,
  Mean02Component,
  Mean03Component,  
  Mean04Component,
  Mean05Component,
  Mean06Component,
  Mean07Component,
  WinComponent,
];

export const stateToComponent = {
  [states.MENU]: MenuComponent,
  [states.MEAN01]: Mean01Component,
  [states.MEAN02]: Mean02Component,
  [states.MEAN03]: Mean03Component,
  [states.MEAN04]: Mean04Component,
  [states.MEAN05]: Mean05Component,
  [states.MEAN06]: Mean06Component,
  [states.MEAN07]: Mean07Component,
  [states.WIN]: WinComponent,
  
};