import { Component, Input, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-blog-card',
  imports: [MatCardModule, RouterLink,MatButtonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {

  @Input() blog: {name: string, desc: string, path: string, date: string} = { name: '', desc: '', path: '', date: ''};
}
