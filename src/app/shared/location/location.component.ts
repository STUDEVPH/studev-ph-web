import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  flag = '../../../assets/jpeg/flag.png'

}
