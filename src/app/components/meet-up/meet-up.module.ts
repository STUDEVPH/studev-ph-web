import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetUpRoutingModule } from './meet-up-routing.module';
import { MeetUpComponent } from './meet-up.component';


@NgModule({
  declarations: [
    MeetUpComponent
  ],
  imports: [
    CommonModule,
    MeetUpRoutingModule
  ]
})
export class MeetUpModule { }
