
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
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

private anuncioRef=this.afDB.list<Anuncio>('Anuncios');

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provkeyer');
  }

  guardaAnuncio(contact:Anuncio){
    if (contact.id=='') {contact.id=""+Date.now();}
    return this.afDB.database.ref('contacts/'+contact.id).set(contact);
  }

  delAnuncio(id){
    this.afDB.database.ref('Anuncios/'+id).remove();
  }


  getAnuncio(){
	return this.anuncioRef.valueChanges();
  }

}
