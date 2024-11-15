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


@NgModule({
  providers: [],
  declarations: [
    StartComponent,
    AboutComponent,
    MainComponent,
    HeroComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MainModule { }
