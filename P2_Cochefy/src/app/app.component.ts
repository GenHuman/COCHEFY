import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { AcercaDeArrendadorPage } from '../pages/acerca-de-arrendador/acerca-de-arrendador';
import { AnunciosPage } from '../pages/anuncios/anuncios';
import { LoginPage } from '../pages/login/login';
import { MisReservasPage } from '../pages/mis-reservas/mis-reservas';
import { MisAlquileresPage } from '../pages/mis-alquileres/mis-alquileres';
import { AnunciosArrendadorPage } from '../pages/anuncios-arrendador/anuncios-arrendador';
import 'rxjs/add/operator/map'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pagesArrendador: Array<{title: string, component: any}>;
  pagesArrendatario: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pagesArrendatario = [
        { title: 'Mis Anuncios', component: AnunciosPage },
        { title: 'Mis Reservas', component: MisReservasPage },
        { title: 'Acerca de', component: AcercaDePage},
        { title: 'Log Out', component: LoginPage},


    ];

    this.pagesArrendador = [
        { title: 'Anuncios', component: AnunciosArrendadorPage },
        { title: 'Mis Alquileres', component: MisAlquileresPage},
        { title: 'Acerca de', component: AcercaDeArrendadorPage},
        { title: 'Log Out', component: LoginPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
