import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AngularFireModule } from '@angular/fire';

import { environment } from 'src/environments/environment';
// Firebase
// import * as firebase from 'firebase';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';

// import { Firestore } from 'firebase/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { CategoriesComponent } from './categories/categories.component';

// Forms
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    // CategoriesComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    // AngularFirestore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
