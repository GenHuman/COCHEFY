import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AnuncioService } from '../../services/anuncio.service';
import { Anuncio } from '../../models/anuncio.model';
import { NuevoAnuncioPage } from '../nuevo-anuncio/nuevo-anuncio';
import { OfertasPage } from '../ofertas/ofertas';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html'
})
export class AnunciosPage {

    username:string;

    anuncios$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private AnuncioService: AnuncioService) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

    ionViewDidEnter()
   {
       this.anuncios$ = this.AnuncioService
        .getAnuncios().snapshotChanges() //cambios
        .map(
          changes => {
            return changes.filter (c => {
                let anuncio = c.payload.val()
                if (anuncio.nombreUsuario == this.username) {
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

    ionViewDidLoad() {
        this.menuCtrl.enable(false, 'arrendadorMenu');
        this.menuCtrl.enable(true, 'arrendatarioMenu');
    }

	nuevoAnuncio () {
		this.navCtrl.push(NuevoAnuncioPage);
	}

    verOfertas (id) {
        this.navCtrl.push(OfertasPage, {
            anuncioId: id
        });
    }

}
