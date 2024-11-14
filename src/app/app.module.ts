import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MainModule } from "./modules/main/main.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  providers: [provideAnimationsAsync()],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    MainModule,
    MatMenuModule,
    MatButtonModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
