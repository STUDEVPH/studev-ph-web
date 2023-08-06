import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LocationComponent } from 'src/app/shared/location/location.component';
import { WhoWeAreComponent } from 'src/app/shared/who-we-are/who-we-are.component';
import { TotalFollowersComponent } from 'src/app/shared/total-followers/total-followers.component';
import { MissionVisionComponent } from 'src/app/shared/mission-vision/mission-vision.component';
import { MeetComponent } from 'src/app/shared/meet/meet.component';
import { GalleryComponent } from 'src/app/shared/gallery/gallery.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LocationComponent,
    WhoWeAreComponent,
    TotalFollowersComponent,
    MissionVisionComponent,
    MeetComponent,
    GalleryComponent
  ],
})
export class HomeModule {}
