import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AnuncioService } from '../../services/anuncio.service';
import { OfertaService } from '../../services/oferta.service';
import { AnunciosArrendadorPage } from '../anuncios-arrendador/anuncios-arrendador';
import { NotifierService } from 'angular-notifier';

/**
 * Generated class for the HacerOfertaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hacer-oferta',
  templateUrl: 'hacer-oferta.html',
})
export class HacerOfertaPage {

  username: string;
  idAnuncio: string;
  public anuncio: any;
  public nPersonas: number;
  public fSalida: string;
  public fRecogida: string;
  public localizacion: string;
  public distancia: number;

  modelo: string;
  precio_dia: number;
  lugarRecogida: string;
  tipo_seguro: string;
  tipo_cancelacion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private notifier: NotifierService, private AnuncioService: AnuncioService, private OfertaService: OfertaService) {
    this.username = JSON.parse(window.localStorage.getItem("username"));
    this.idAnuncio = this.navParams.get('idAnuncio');

    this.AnuncioService
      .getAnuncios().valueChanges()
      .subscribe(anuncioList => {
        anuncioList.forEach((item) => {
          if (item.id == this.idAnuncio) {
            this.anuncio = item;
            return;
          }
        });
      });
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'arrendadorMenu');
    this.menuCtrl.enable(false, 'arrendatarioMenu');
  }

  ionViewDidEnter() {
    this.nPersonas = this.anuncio.nPersonas;
    this.fSalida = this.anuncio.fSalida;
    this.fRecogida = this.anuncio.fRecogida;
    this.localizacion = this.anuncio.localizacion;
    this.distancia = this.anuncio.distancia;
  }

  confirmarOferta() {
    if (!this.modelo || !this.precio_dia || !this.lugarRecogida || !this.tipo_seguro || !this.tipo_cancelacion) {
      this.notifier.notify( 'error', "Por favor, rellena todos los campos" );
    } else {
      var oferta = {
           idAnuncio: this.idAnuncio,
           nombreEmpresa: this.username,
           modeloCoche: this.modelo,
           precioDia: this.precio_dia,
           Seguro: this.tipo_seguro,
           Cancelacion: this.tipo_cancelacion,
           lugarRecogida: this.lugarRecogida,
       };
      this.OfertaService.addOferta(oferta);
      this.notifier.notify( 'success', "¡OFERTA REALIZADA!" );
      this.navCtrl.setRoot(AnunciosArrendadorPage);
    }
  }

}
