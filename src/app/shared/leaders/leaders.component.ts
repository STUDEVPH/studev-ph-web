import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ILeaders } from 'src/app/interface';

@Component({
  selector: 'leaders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss'],
})
export class LeadersComponent {
  controls: ILeaders[] = [
    {
      image: '../../../assets/jpeg/leaders/leader1.png',
      name: 'Ted Pogi123',
      rank: 'Teacher 1',
    },
    {
      image: '../../../assets/jpeg/leaders/leader1.png',
      name: 'Ted Pogi123',
      rank: 'Teacher 1',
    },
    {
      image: '../../../assets/jpeg/leaders/leader1.png',
      name: 'Ted Pogi123',
      rank: 'Teacher 1',
    },
    {
      image: '../../../assets/jpeg/leaders/leader1.png',
      name: 'Ted Pogi123',
      rank: 'Teacher 1',
    },
    {
      image: '../../../assets/jpeg/leaders/leader1.png',
      name: 'Ted Pogi123',
      rank: 'Teacher 1',
    },
  ];
}
