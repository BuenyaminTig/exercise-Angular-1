import { Component, Input, } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-hamster-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './hamster-card.component.html',
  styleUrl: './hamster-card.component.scss'
})
export class HamsterCardComponent {

  // text = 'Hallo, mein Name ist Freddy! Ich bin hier, um neue Freunde zu treffen!';
  @Input() text: string = '';
  @Input() img: string = '';
}
