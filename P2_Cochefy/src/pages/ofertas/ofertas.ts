import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Oferta } from '../../models/oferta.model';
import { OfertaService } from '../../services/oferta.service';
import { Anuncio } from '../../models/anuncio.model';
import { AnuncioService } from '../../services/anuncio.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/**
 * Generated class for the OfertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ofertas',
  templateUrl: 'ofertas.html',
})
export class OfertasPage {

    username:string;
    idAnuncio:string;

    ofertas$: Observable<Oferta[]>;
	anuncioList: Array<Anuncio> = [];
	
    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private OfertaService: OfertaService,  private anuncioService: AnuncioService) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
      this.idAnuncio = this.navParams.get('idAnuncio');
	  
	  	this.anuncioService.getAnuncios.valueChanges() 
	 .subscribe(anuncioList => {
				
                console.log(anuncioList);
                anuncioList.forEach((item) => {
					this.anuncioList.push(item);
					console.log(this.anuncioList);
                });
            });
	  
    }

  ionViewDidLoad() {
      this.menuCtrl.enable(false, 'arrendadorMenu');
      this.menuCtrl.enable(true, 'arrendatarioMenu');
  }


    ionViewDidEnter()
   {
       this.ofertas$ = this.OfertaService
        .getOfertas().snapshotChanges() //cambios
        .map(
          changes => {
            return changes.filter (c => {
                let oferta = c.payload.val()
                if (oferta.idAnuncio == this.idAnuncio) {
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

   aceptarOferta(idOferta: string){
	   
	   

		this.anuncioService.confirmarOferta(idOferta,this.idAnuncio);
   }
   

}
