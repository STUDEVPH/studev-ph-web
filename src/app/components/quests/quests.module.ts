import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestsRoutingModule } from './quests-routing.module';
import { QuestsComponent } from './quests.component';


@NgModule({
  declarations: [
    QuestsComponent
  ],
  imports: [
    CommonModule,
    QuestsRoutingModule
  ]
})
export class QuestsModule { }
