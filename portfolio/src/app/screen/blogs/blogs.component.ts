import { Component, Input } from '@angular/core';
import { TerminalButtonsComponent } from "../../component/terminal-buttons/terminal-buttons.component";
import { TerminalContainerComponent } from "../../terminal-container/terminal-container.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from '../../component/blog-card/blog-card.component';

@Component({
  selector: 'app-blogs',
  imports: [TerminalButtonsComponent, TerminalContainerComponent, MatCardModule, RouterLink,MatButtonModule, BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  @Input() blogs: ({name: string, desc:string, path: string})[] = [
    {
      "name": "HII",
      "desc": "This post is about",
      "path": "hii"
    },
    {
      "name": "HII",
      "desc": "This post is about",
      "path": ""
    }
  ];
}
