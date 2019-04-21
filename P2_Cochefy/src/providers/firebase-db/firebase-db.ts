
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {Contact} from '../../models/contact.model';
import {Anuncio} from '../../models/anuncio.model';
import {Oferta} from '../../models/oferta.model';
import {Reserva} from '../../models/reserva.model';

/*
  Generated class for the FirebaseDbProvider provkeyer.

  See https://angular.io/gukeye/dependency-injection for more info on provkeyers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

private contactsRef=this.afDB.list<Contact>('contacts');

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provkeyer');
  }

  guardaContact(contact:Contact){
    if (contact.key=='') {contact.key=""+Date.now();}
    return this.afDB.database.ref('contacts/'+contact.key).set(contact);
  }

  delContact(key){
    this.afDB.database.ref('contacts/'+key).remove();
  }


  getContacts(){
	return this.contactsRef.valueChanges();
  }

}
