import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavbar } from 'src/app/interface';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  controls: INavbar[] = [
    { navigator: 'HOME' },
    { navigator: 'EVENTS' },
    { navigator: 'MEET UPS' },
    { navigator: 'PARTNERS' },
    { navigator: 'QUEST' },
  ];
}
