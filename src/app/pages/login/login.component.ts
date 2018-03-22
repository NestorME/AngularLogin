import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: Observable<firebase.User>;
private userDetails: firebase.User = null;

constructor(private _firebaseAuth: AngularFireAuth,
            public router: Router) {
    this.user = _firebaseAuth.authState;
this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.router.navigate(['home']);
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
}

signInWithGoogle() {
 return this._firebaseAuth.auth.signInWithPopup(
   new firebase.auth.GoogleAuthProvider()
 )
}
ngOnInit() {
}


}
