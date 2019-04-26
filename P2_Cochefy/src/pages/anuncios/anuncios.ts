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
	anunciosAntiguos: Array<Anuncio> = [];

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
                let anuncio = c.payload.val();
				var hoy = new Date();
				var fechaAnuncio = new Date(anuncio.fSalida+"T23:59:00");
                if (anuncio.nombreUsuario == this.username) {
					if(hoy<=fechaAnuncio){
						return true;
					}else{
						this.anunciosAntiguos.push(anuncio);
						if(document.getElementById("ocultarAnunciosAntiguosBtn").style.display == "none"){
							document.getElementById("mostrarAnunciosAntiguosBtn").style.display = "block";
						}
						return false;
					}
                } else {
					return false;
				}
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
            idAnuncio: id
        });
    }

	mostrarAnunciosAntiguos(){
		document.getElementById("mostrarAnunciosAntiguosBtn").style.display = "none";
		document.getElementById("ocultarAnunciosAntiguosBtn").style.display = "block";
		document.getElementById("anunciosAntiguos").style.display = "block";
	}

	ocultarAnunciosAntiguos(){
		document.getElementById("mostrarAnunciosAntiguosBtn").style.display = "block";
		document.getElementById("ocultarAnunciosAntiguosBtn").style.display = "none";
		document.getElementById("anunciosAntiguos").style.display = "none";
	}

}
