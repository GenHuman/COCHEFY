import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AnunciosPage } from '../pages/anuncios/anuncios';
import { LoginPage } from '../pages/login/login';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { RegisterPage } from '../pages/register/register';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { NuevoAnuncioPage } from '../pages/nuevo-anuncio/nuevo-anuncio';
import { MisReservasPage } from '../pages/mis-reservas/mis-reservas';
import { MisAlquileresPage } from '../pages/mis-alquileres/mis-alquileres';
import { HacerOfertaPage } from '../pages/hacer-oferta/hacer-oferta';
import { AnunciosArrendadorPage } from '../pages/anuncios-arrendador/anuncios-arrendador';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AnuncioService} from '../services/anuncio.service';
import {OfertaService} from '../services/oferta.service';
import {ReservaService} from '../services/reserva.service';
import { UserService } from '../services/user.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { FirebaseDbProviderUser } from '../providers/firebase-db/firebase-db-user';
import { fireBaseConfig } from '../app/firebase.credentials';


@NgModule({
  declarations: [
    MyApp,
    AnunciosPage,
    LoginPage,
    RegisterPage,
    MisReservasPage,
    OfertasPage,
	NuevoAnuncioPage,
    AcercaDePage,
    MisAlquileresPage,
    AnunciosArrendadorPage,
    HacerOfertaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(fireBaseConfig),
	AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnunciosPage,
	NuevoAnuncioPage,
    LoginPage,
    RegisterPage,
    AcercaDePage,
    MisReservasPage,
    OfertasPage,
    MisAlquileresPage,
    AnunciosArrendadorPage,
    HacerOfertaPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AnuncioService,
    OfertaService,
    ReservaService,
	UserService,
    FirebaseDbProvider
	
  ]
})
export class AppModule { }
