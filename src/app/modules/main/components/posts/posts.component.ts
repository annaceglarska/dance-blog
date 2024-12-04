import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  posts: Posts = [];

  constructor(private postService: PostService) {

  }

  async ngOnInit() {
    this.postService.getAllSnap()
      .pipe(
        map(snap => snap.docs.map(doc => doc.data())),
      )
      .subscribe(data => {
        this.posts = data;
      })
  }
}
