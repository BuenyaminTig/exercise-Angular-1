import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HamsterCardComponent } from './hamster-card/hamster-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendboxComponent } from './friendbox/friendbox.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    HamsterCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendboxComponent,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  postTexts = [
    'Hallo, mein Name ist Freddy! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammmen. Freut mich, dass ihr hier seid!',
    'Hey, Mein Name ist Susanne. Ich bin 2 jahre alt.',
    'Ich esse gerne Kekse.'
  ];

  postPics =[
    './assets/img/hamsterPics/hamster1.jpg',
    './assets/img/hamsterPics/hamster2.jpg',
    './assets/img/hamsterPics/hamster3.png',
    './assets/img/hamsterPics/hamster4.jpg',
  ];

}
