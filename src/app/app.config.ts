import { FirebaseOptions, initializeApp, provideFirebaseApp } from "@angular/fire/app";

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from "@angular/fire/analytics";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getStorage, provideStorage } from "@angular/fire/storage";
import { FIREBASE_OPTIONS } from "@angular/fire/compat";
import { MARKED_OPTIONS, provideMarkdown } from "ngx-markdown";
import { gfmHeadingId } from "marked-gfm-heading-id";


export const firebaseConfig: FirebaseOptions = {
  projectId: 'dance-blog',
  appId: '1:458947448320:web:98b1c3f35739e6794f92e5',
  storageBucket: 'dance-blog.firebasestorage.app',
  apiKey: 'AIzaSyBjcUuemakp0wIbXD6U6X6Td4_JvM0fywU',
  authDomain: 'dance-blog.firebaseapp.com',
  messagingSenderId: '458947448320',
  measurementId: 'G-J172NCQJ1W',
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
    provideMarkdown({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
        }
      },
      markedExtensions: [gfmHeadingId()],
    })
  ]
};

