import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { MainComponent } from './page/main/main.component';

export const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];
