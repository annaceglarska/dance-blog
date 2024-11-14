import { NgModule } from '@angular/core';
import { routes } from './main.routes';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { MainComponent } from './page/main/main.component';


@NgModule({
  providers: [],
  declarations: [
    AboutComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
