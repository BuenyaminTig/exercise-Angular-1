import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-friendbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friendbox.component.html',
  styleUrl: './friendbox.component.scss'
})
export class FriendboxComponent {

  names = ['Maurice', 'Karina', 'Patrick', 'Hans'];
  texts = ['isst gerne', 'flirtet gerne', 'Gräbt gerne Löcher', 'Hamsterrad-Freak'];
  images = [
    './assets/img/hamsterPics/hamster5.jpg',
    './assets/img/hamsterPics/hamster6.jpg',
    './assets/img/hamsterPics/hamster7.jpg',
    './assets/img/hamsterPics/hamster8.jpg',
  ];
}
