import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {

    private user: firebase.User;

    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }

    signInWithEmail(credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password);
    }

    signUp(credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(
          (success) => {
            let user:any = firebase.auth().currentUser;
            user.sendEmailVerification().then(
              (success) => {console.log("email sent")}
            ).catch(
              (err) => {
                console.log("email error"+err);
              }
            )

          }).catch(
            (err) => {
              console.log("email error"+err);
            }
          )
    }

    get authenticated(): boolean {
        return this.user !== null;
    }

    getEmail() {
        return this.user && this.user.email;
    }

    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }

    isVerified(): boolean {
      return this.user.emailVerified;
    }

    resetPassword(email: string) {
      return this.afAuth.auth.sendPasswordResetEmail(email)
        .then(() => console.log('sent Password Reset Email: ' + email))
        .catch((error) => console.log(error))
    }

}
