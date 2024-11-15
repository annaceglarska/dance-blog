import { Component } from '@angular/core';
import { Posts } from '../../models/post.model';
import { postsMock } from '../../mocks/post.mock';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: Posts = postsMock;
}
