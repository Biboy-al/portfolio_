import { Component, Input } from '@angular/core';
import { TerminalButtonsComponent } from "../../component/terminal-buttons/terminal-buttons.component";
import { TerminalContainerComponent } from "../../component/terminal-container/terminal-container.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from '../../component/blog-card/blog-card.component';
import { DbService } from '../../service/db.service';
import {inject} from '@angular/core';

@Component({
  selector: 'app-blogs',
  imports: [TerminalButtonsComponent, TerminalContainerComponent, MatCardModule, MatButtonModule, BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  @Input() blogs: ({name: string, desc:string, path: string, date: string})[] = [
    {
      "name": "Road To Full Stack Developer",
      "desc": "This post is about",
      "path": "hii",
      "date": "12 Jan 2024"
    },
    {
      "name": "HII",
      "desc": "This post is about",
      "path": "",
      "date": "12 Jan 2024"
    }
  ];

  private dbService = inject(DbService);

 async ngOnInit() {
    await this.dbService.fetchBlogMetaData();
  }
}
