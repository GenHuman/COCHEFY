import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio.model';
import { AnuncioService } from '../../services/anuncio.service';
import { AnunciosPage } from '../anuncios/anuncios';
//import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'page-nuevo-anuncio',
  templateUrl: 'nuevo-anuncio.html'
})

export class NuevoAnuncioPage {

    username: string;

	today = new Date();

	nPersonas: number;
	fSalida: string;
	fRecogida: string;
	distancia: number;
	asegurado = false;
	cancelacion = false;

    // anuncios$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public anuncioService: AnuncioService) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

    ionViewDidLoad() {
        this.menuCtrl.enable(false, 'arrendadorMenu');
        this.menuCtrl.enable(true, 'arrendatarioMenu');
    }

	cancelar () {
		this.navCtrl.setRoot(AnunciosPage);
	}

	confirmarOferta () {
		console.log(
		"nPersonas="+this.nPersonas+
		",fSalida="+this.fSalida+
		",fRecogida="+this.fRecogida+
		",distancia="+this.distancia+
		",asegurado="+this.asegurado+
		",cancelacion="+this.cancelacion);
		var anuncio = {nombreUsuario: this.username,nPersonas:this.nPersonas, fSalida:this.fSalida, fRecogida:this.fRecogida, localizacion:"", distancia:this.distancia, asegurado:this.asegurado, cancelacion:this.cancelacion, alquilado:false}
		//alert(anuncio);
		this.anuncioService.addAnuncio(anuncio);
        this.navCtrl.setRoot(AnunciosPage);

	}

}
