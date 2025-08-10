import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TerminalContainerComponent } from "../../terminal-container/terminal-container.component";
@Component({
  selector: 'app-blog-post',
  imports: [MarkdownModule, TerminalContainerComponent],
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
