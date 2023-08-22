import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICarousel, ISelect } from 'src/app/interface';

@Component({
  selector: 'who-we-are',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
})
export class WhoWeAreComponent {
  logo = '../../../assets/png/logo-big.png';
  selectedIndex: number = 0;

  selected: ISelect[] = [
    { selected: '', active: true },
    { selected: '', active: false },
    { selected: '', active: false },
    { selected: '', active: false },
  ];

  controls: ICarousel[] = [
    {
      title: 'Lorem Ipsum Dolor',
      description:
        'All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content into see what it look like with these font combinations.',
    },
    {
      title: 'Lorem Ipsum Dolor',
      description:
        'All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content into see what it look like with these font combinations.',
    },
    {
      title: 'Lorem Ipsum Dolor',
      description:
        'All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content into see what it look like with these font combinations.',
    },
    {
      title: 'Lorem Ipsum Dolor',
      description:
        'All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content into see what it look like with these font combinations.',
    },
  ];

  setSelected(control: ISelect, index: number): void {
    this.selected.forEach((item) => {
      item.active = false;
    });

    control.active = true;
    this.selectedIndex = index;
  }

  isCarouselVisible(index: number): boolean {
    return this.selectedIndex === index;
  }
}
