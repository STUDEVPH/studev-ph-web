import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IFollowers } from 'src/app/interface';

@Component({
  selector: 'total-followers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-followers.component.html',
  styleUrls: ['./total-followers.component.scss'],
})
export class TotalFollowersComponent {
  controls: IFollowers[] = [
    { box: '', total: '100K', location: 'All over the philippines' },
    { box: '', total: '100K', location: 'All over the philippines' },
    { box: '', total: '100K', location: 'All over the philippines' },
    { box: '', total: '100K', location: 'All over the philippines' },
  ];
}
