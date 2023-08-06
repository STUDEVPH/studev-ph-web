import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IImages } from 'src/app/interface';

@Component({
  selector: 'meet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.scss'],
})
export class MeetComponent {
  controls: IImages[] = [
    {
      image: '../../../assets/jpeg/meet-up/meetup1.png',
    },
    { image: '../../../assets/jpeg/meet-up/meetup2.png' },
    { image: './../../assets/jpeg/meet-up/meetup3.png' },
  ];
}
