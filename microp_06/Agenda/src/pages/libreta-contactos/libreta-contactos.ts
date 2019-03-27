import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import 'rxjs/add/operator/map'


/**
 * Generated class for the LibretaContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libreta-contactos',
  templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {

  contacts$: Observable<Contact[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService, public dbFirebase:FirebaseDbProvider) {
  }

  /*ionViewWillEnter(){

     this.contacts = this.ContactService.getContacts().snapshotChanges().map(
	
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
	

  }*/
  
  ionViewDidEnter()
 {
	 
   this.contacts$ = this.ContactService
    .getContacts()  //Retorna la DB
    .snapshotChanges() //retorna los cambios en la DB (key and value)
    .map(
      /*
      Estas líneas retornan un array de  objetos con el id del registro y su contenido
      {
        "key":"value",
        contact.name,
        contact.organization,
        ...
      }
      */
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      }); 
 //alert("hola");
 }

  onLoadContactosPage(){
    this.navCtrl.push(NuevoContactoPage);
  }
  
  



}
