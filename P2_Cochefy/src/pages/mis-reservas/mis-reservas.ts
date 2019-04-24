import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AnuncioService } from '../../services/anuncio.service';
import { Anuncio } from '../../models/anuncio.model';
import { Observable } from 'rxjs';

/**
 * Generated class for the MisReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-reservas',
  templateUrl: 'mis-reservas.html',
})
export class MisReservasPage {

    username:string;

    anuncios$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private AnuncioService: AnuncioService) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

  ionViewDidLoad() {
      this.menuCtrl.enable(false, 'arrendadorMenu');
      this.menuCtrl.enable(true, 'arrendatarioMenu');
  }

  ionViewDidEnter()
 {
     this.anuncios$ = this.AnuncioService
      .getAnuncios().snapshotChanges() //cambios
      .map(
        changes => {
          return changes.filter (c => {
              let anuncio = c.payload.val()
              if (anuncio.nombreUsuario == this.username && anuncio.alquilado) {
                  return true;
              } else return false;
          })
          .map(c => {
               return {
                    ...c.payload.val()
               }
           });
        });
 }

 verReserva(){
     alert("Reserva!!")
 }

}
