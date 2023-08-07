import { IColors, ISocials } from './../../interface/index';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'social-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  images: ISocials[] = [
    { image: '../../../assets/png/social-media/fb.png' },
    { image: '../../../assets/png/social-media/Discord.png' },
    { image: '../../../assets/png/social-media/Messenger.png' },
    { image: '../../../assets/png/social-media/Insta.png' },
  ];

  controls: IColors[] = [
    { color: 'yellow' },
    { color: 'pink' },
    { color: 'blue' },
  ];
}
