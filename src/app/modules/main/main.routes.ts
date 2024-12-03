import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { MainComponent } from './page/main/main.component';
import { StartComponent } from './page/start/start.component';
import { BlogComponent } from './page/blog/blog.component';
import { CreatePostComponent } from './page/create-post/create-post.component';

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: StartComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "blog",
        component: BlogComponent,
        // children: [
        //   {
        //     path: "categories/:tag",
        //     component:
        //   }
        // ]
      },
      {
        path: "post/create",
        component: CreatePostComponent
      }
    ]
  },

];
