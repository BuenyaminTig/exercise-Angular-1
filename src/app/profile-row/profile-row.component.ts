import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
  @Input() name: string = 'Frederick';
  @Input() description: string = '2 Jahre alt';
  @Input() img: string = './assets/img/hamsterPics/hamster1.jpg';

}
