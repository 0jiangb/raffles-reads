import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient) {}

}
