import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../models/user.model";

@Injectable()
export class UserService{

    private userRef=this.db.list<User>('UserFirebase');

    constructor(private db:AngularFireDatabase){}

    addUser(value: User){
       return this.userRef.push(value);
    }

    getUsers(){
      return this.userRef;
    }

	getUserByName(name:string){
		return this.db.list('/UserFirebase', ref => ref.orderByChild('username').equalTo(name));
	}

}
