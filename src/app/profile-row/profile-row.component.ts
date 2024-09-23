import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
  @Input() name: string = 'Frederick';
  @Input() description: string = '2 Jahre alt';
  @Input() img: string = './assets/img/hamsterPics/hamster1.jpg';
  @Input() canFollow = true;

  constructor(public fs: FriendService){}
}
