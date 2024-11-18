import { NgModule } from '@angular/core';
import { routes } from './main.routes';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { MainComponent } from './page/main/main.component';
import { HeroComponent } from './components/hero/hero.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { StartComponent } from './page/start/start.component';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './page/blog/blog.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  providers: [],
  declarations: [
    StartComponent,
    AboutComponent,
    MainComponent,
    HeroComponent,
    PostsComponent,
    PostComponent,
    BlogComponent,
    TagsListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatGridListModule,
  ]
})
export class MainModule { }
