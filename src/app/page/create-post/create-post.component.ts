import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Post, StatusEnum } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { TagService } from '../../services/tag/tag.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface TagOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
  imports: [MatIconModule, MatButtonModule, LMarkdownEditorModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  standalone: true
})
export class CreatePostComponent implements OnInit {
  tagsList: TagOption[] = [];
  content: string = '';

  constructor(
    private postService: PostService,
    private router: Router,
    private tagService: TagService
  ) { }

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    tags: new FormControl<string[]>([], Validators.required),
    content: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
  });

  ngOnInit(): void {
    this.tagService
      .getAllSnap()
      .pipe(
        map((snap) =>
          snap.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return {
              id,
              label: data.name,
            };
          })
        )
      )
      .subscribe((data: TagOption[]) => {
        this.tagsList = data;
      });
  }

  async onSubmit() {
    if (this.form.valid) {
      const data: Post = {
        author: 'Ania',
        authorId: '1',
        publishedAt: new Date().toISOString(),
        tags: this.form.controls.tags.value!,
        title: this.form.controls.title.value!,
        content: this.form.controls.content.value!,
        status: StatusEnum.ACTIVE,
      };
      try {
        await this.postService.create(data);
        this.router.navigate(['/blog']);
      } catch (error) {
        alert('Failed');
      }
    }
  }
}
