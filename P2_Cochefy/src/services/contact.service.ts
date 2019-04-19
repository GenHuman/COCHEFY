import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Contact } from "../models/contact.model";

@Injectable()
export class ContactService{

    private contactsRef=this.db.list<Contact>('AgendaFirebase');
	

    constructor(private db:AngularFireDatabase){}

    addContact(value: Contact){
       return this.contactsRef.push(value);
    }

    getContacts(){
      return this.contactsRef;
    }

    updateContact(value: Contact){
		return this.contactsRef.update(value.key,value);
    }

    removeContact(value: Contact){
		return this.contactsRef.remove(value.key);
    }
}