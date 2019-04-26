import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio.model';
import { AnuncioService } from '../../services/anuncio.service';
import { AnunciosPage } from '../anuncios/anuncios';
import { NotifierService } from 'angular-notifier';
//import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'page-nuevo-anuncio',
  templateUrl: 'nuevo-anuncio.html'
})

export class NuevoAnuncioPage {

    username: string;

	today = new Date();

    localizacion: string;
	nPersonas: number;
	fSalida: string;
	fRecogida: string;
	distancia: number;
	asegurado = false;
	cancelacion = false;

    // anuncios$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public anuncioService: AnuncioService, private notifier: NotifierService) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

    ionViewDidLoad() {
        this.menuCtrl.enable(false, 'arrendadorMenu');
        this.menuCtrl.enable(true, 'arrendatarioMenu');
    }

	cancelar () {
		this.navCtrl.setRoot(AnunciosPage);
	}

	confirmarAnuncio () {
		let date1 = new Date(this.fSalida+"T00:00:00");
		let date2 = new Date(this.fRecogida+"T00:00:00");
		if(!this.nPersonas || !this.fSalida || !this.fRecogida || !this.localizacion || !this.distancia){
            this.notifier.notify( 'error', "Por favor, rellena todos los campos" );
        } else {
            if(date2 >= date1){
				console.log(
				"nPersonas="+this.nPersonas+
				",fSalida="+this.fSalida+
				",fRecogida="+this.fRecogida+
				",localizacion="+this.localizacion+
				",distancia="+this.distancia+
				",asegurado="+this.asegurado+
				",cancelacion="+this.cancelacion);
				var anuncio = {id:"", nombreUsuario: this.username,nPersonas:this.nPersonas, fSalida:this.fSalida, fRecogida:this.fRecogida, localizacion:this.localizacion, distancia:this.distancia, asegurado:this.asegurado, cancelacion:this.cancelacion, alquilado:false, idOfertaAceptada:""}
				this.notifier.notify( 'success', "¡ANUNCIO AÑADIDO!" );
				this.anuncioService.addAnuncio(anuncio);
				this.navCtrl.setRoot(AnunciosPage);
			} else{
                this.notifier.notify( 'error', "La fecha de recogida tiene que ser posterior a la de salida" );
    		}
        }


	}

}
