import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main/main.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { firebaseConfig } from './app.config';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MarkdownModule } from 'ngx-markdown';
import { MARKED_OPTIONS } from 'ngx-markdown';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

@NgModule({
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
  ],
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    MainModule,
    MatMenuModule,
    MatButtonModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
        }
      },
      markedExtensions: [gfmHeadingId()],
    }),
    LMarkdownEditorModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
