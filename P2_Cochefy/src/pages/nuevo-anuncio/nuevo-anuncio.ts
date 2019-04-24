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
		let date1 = new Date(this.fSalida+"T00:00:00");
		let date2 = new Date(this.fRecogida+"T00:00:00");
		if(date2 > date1){
			if(this.nPersonas!=undefined){
			if(this.fSalida!=undefined){
			if(this.fRecogida!=undefined){
			if(this.localizacion!=undefined){
			if(this.distancia!=undefined){
				console.log(
				"nPersonas="+this.nPersonas+
				",fSalida="+this.fSalida+
				",fRecogida="+this.fRecogida+
				",localizacion="+this.localizacion+
				",distancia="+this.distancia+
				",asegurado="+this.asegurado+
				",cancelacion="+this.cancelacion);
				var anuncio = {id:"", nombreUsuario: this.username,nPersonas:this.nPersonas, fSalida:this.fSalida, fRecogida:this.fRecogida, localizacion:this.localizacion, distancia:this.distancia, asegurado:this.asegurado, cancelacion:this.cancelacion, alquilado:false}
				//alert(anuncio);
				this.anuncioService.addAnuncio(anuncio);
				this.navCtrl.setRoot(AnunciosPage);
			}else{
				alert("Tienes que rellenar la distancia a recorrer en el viaje.")
				//document.getElementById("personasInput").focus();
				//document.getElementById("personasInput").parentNode.classList.add = "show";

				//document.getElementById("personasInput").classList.add = "step";
			}
			}else{
				alert("Tienes que rellenar el lugar de recogida del vehículo.")
			}
			}else{
				alert("Tienes que rellenar la fecha de llegada del viaje.")
			}
			}else{
				alert("Tienes que rellenar la fecha de salida del viaje.")
			}
			}else{
				alert("Tienes que rellenar el número de personas.")
			}

			
		}else{
			alert("La fecha de recogida tiene que ser posterior a la fecha de salida.")
		}
	}

}
