import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { MainComponent } from './page/main/main.component';
import { StartComponent } from './page/start/start.component';

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
      }
    ]
  },

];
