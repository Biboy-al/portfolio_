import { Component, input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-contact-card',
  imports: [MatIconModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {

  contact = input<string>();
  icon = input<string>();
  link = input<string>();
}
