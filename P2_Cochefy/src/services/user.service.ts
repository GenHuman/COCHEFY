import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../models/user.model";

@Injectable()
export class UserService{

    private userRef=this.db.list<User>('UserFirebase');
	/*const name$ = new Subject<string>();
	const queryObservable = name$.pipe(
	  switchMap(name => 
		db.list('/UserFirebase', userRef => userRef.orderByChild('nombre').equalTo(name)).valueChanges()
	  )
	);
	queryObservable.subscribe(queriedItems => {
		console.log(queriedItems);  
	});*/

    constructor(private db:AngularFireDatabase){}

    addUser(value: User){
       return this.userRef.push(value);
    }

    getUsers(){
      return this.userRef;
    }
	
	getUserByName(name:string){
		return this.db.object('/UserFirebase', ref => ref.orderByChild('username').equalTo(name));
		//const user = this.af.database.object(`users/${login}`);
	}

}