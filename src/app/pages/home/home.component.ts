import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _firebaseAuth: AngularFireAuth,
              public router:Router) { }

  ngOnInit() {
  }
  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['login']));
 }

}
