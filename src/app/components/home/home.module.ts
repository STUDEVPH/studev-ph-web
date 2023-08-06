import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LocationComponent } from 'src/app/shared/location/location.component';
import { WhoWeAreComponent } from 'src/app/shared/who-we-are/who-we-are.component';
import { TotalFollowersComponent } from 'src/app/shared/total-followers/total-followers.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LocationComponent,
    WhoWeAreComponent,
    TotalFollowersComponent,
  ],
})
export class HomeModule {}
