import { Component } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [CommonModule, ProfileRowComponent],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent {

  names = ['Maurice', 'Karina', 'Patrick', 'Hans'];
  texts = ['isst gerne', 'flirtet gerne', 'Gräbt gerne Löcher', 'Hamsterrad-Freak'];
  images = [
    './assets/img/hamsterPics/hamster5.jpg',
    './assets/img/hamsterPics/hamster6.jpg',
    './assets/img/hamsterPics/hamster7.jpg',
    './assets/img/hamsterPics/hamster8.jpg',
  ];
}


