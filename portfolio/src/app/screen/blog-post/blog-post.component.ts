import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  content: any;
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit() {
//     const slug = this.route.snapshot.paramMap.get('slug');
//     this.http.get(`assets/posts/${slug}.md`, { responseType: 'text' })
//       .subscribe(md => this.content = marked(md));
//   }
}
