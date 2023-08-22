import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'mission-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.scss'],
})
export class MissionVisionComponent {
  mission = '../../../assets/jpeg/mission.png';
  vision = '../../../assets/jpeg/mission.png';
}
