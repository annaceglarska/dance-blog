import { Component } from '@angular/core';
import { PostsComponent } from '../../components/posts/posts.component';
import { TagsListComponent } from '../../components/tags-list/tags-list.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  imports: [PostsComponent, TagsListComponent],
  standalone: true
})
export class BlogComponent {

}
