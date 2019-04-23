
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {User} from '../../models/user.model';

/*
  Generated class for the FirebaseDbProvider provkeyer.

  See https://angular.io/gukeye/dependency-injection for more info on provkeyers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProviderUser {

private usersRef=this.afDB.list<User>('users');

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseDbProviderUser Provkeyer');
  }
  
  guardaUser(user:User){
    if (user.key=='') {user.key=""+Date.now();}
    return this.afDB.database.ref('users/'+user.username).set(user);
  }

  delUser(username){
    this.afDB.database.ref('users/'+username).remove();
  }
  
  
	getUsers(){
	return this.usersRef.valueChanges();
	} 

}
