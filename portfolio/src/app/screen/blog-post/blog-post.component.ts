import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { TerminalContainerComponent } from "../../component/terminal-container/terminal-container.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  imports: [MarkdownModule, TerminalContainerComponent, RouterLink, MatIconModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  content: any;
  
  slug = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';

   
  }

}
