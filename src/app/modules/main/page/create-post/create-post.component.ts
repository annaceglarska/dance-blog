import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Post, StatusEnum } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { Router, Routes } from '@angular/router';
import { TagService } from '../../services/tag/tag.service';
import { map } from 'rxjs';

interface TagOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
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
