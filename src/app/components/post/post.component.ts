import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  imports: [MatCardModule, MarkdownModule, CommonModule, MatButtonModule],
  standalone: true
})
export class PostComponent {
  @Input()
  post!: Post

  @Input()
  index!: number
}
