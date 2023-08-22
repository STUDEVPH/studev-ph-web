import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IImages } from 'src/app/interface';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  secondImage = '../../../assets/jpeg/meet-up/meet6.png';

  firstImages: IImages[] = [
    { image: '../../../assets/jpeg/meet-up/meet4.png' },
    { image: '../../../assets/jpeg/meet-up/meet5.png' },
    { image: '../../../assets/jpeg/sqaure.png' },
  ];

  thirdImages: IImages[] = [
    { image: '../../../assets/jpeg/sqaure.png' },
    { image: '../../../assets/jpeg/meet-up/meet7.png' },
    { image: '../../../assets/jpeg/meet-up/meet8.png' },
  ];
}
