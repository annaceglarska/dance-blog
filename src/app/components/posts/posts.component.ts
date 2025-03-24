import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Posts } from '../../models/post.model';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  imports: [MatGridListModule, PostComponent, CommonModule],
  standalone: true
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
