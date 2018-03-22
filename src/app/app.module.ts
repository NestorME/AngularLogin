import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { routes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCPU32H6RctCJzBzX0X0HPdgUisDDLQsOE",
  authDomain: "angularproyect-6962d.firebaseapp.com",
  databaseURL: "https://angularproyect-6962d.firebaseio.com",
  projectId: "angularproyect-6962d",
  storageBucket: "",
  messagingSenderId: "262794882801"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
