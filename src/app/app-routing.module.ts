//import { CommonModule } from '@angular/common';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Mean01Component} from './mean-01/mean-01.component';

const appRoutes:Routes = [
  { path: 'mean-01', component: Mean01Component },
]

@NgModule({
  imports: [
    //CommonModule
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ 
    RouterModule 
  ],
  declarations: []
})
export class AppRoutingModule {}