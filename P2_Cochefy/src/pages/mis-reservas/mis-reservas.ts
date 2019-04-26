import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AnuncioService } from '../../services/anuncio.service';
import { Anuncio } from '../../models/anuncio.model';
import { Oferta } from '../../models/oferta.model';
import { OfertaService } from '../../services/oferta.service';
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
	ofertas$: Observable<Oferta[]>;
	reservasAntiguas: Array<Anuncio> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private OfertaService: OfertaService, private AnuncioService: AnuncioService) {
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
              let anuncio = c.payload.val();
			  var hoy = new Date();
			  var fechaAnuncio = new Date(anuncio.fRecogida+"T00:00:00");
              if (anuncio.nombreUsuario == this.username && anuncio.alquilado) {
                  if(hoy<fechaAnuncio){
						return true;
					}else{
						if(document.getElementById("mostrarReservasAntiguasBtn").style.display == "none"){
							document.getElementById("mostrarReservasAntiguasBtn").style.display = "block";
						}
						this.reservasAntiguas.push(anuncio);
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

		this.ofertas$ = this.OfertaService
        .getOfertas().snapshotChanges() //cambios
        .map(
          changes => {
            return changes.filter (c => {

                    return true;

            })
            .map(c => {
                 return {
                      ...c.payload.val()
                 }
             });
          });
 }
 
 	mostrarReservasAntiguas(){
		document.getElementById("mostrarReservasAntiguasBtn").style.display = "none";
		document.getElementById("ocultarReservasAntiguasBtn").style.display = "block";
		document.getElementById("reservasAntiguas").style.display = "block";
	}

	ocultarReservasAntiguas(){
		document.getElementById("mostrarReservasAntiguasBtn").style.display = "block";
		document.getElementById("ocultarReservasAntiguasBtn").style.display = "none";
		document.getElementById("reservasAntiguas").style.display = "none";
	}

}
