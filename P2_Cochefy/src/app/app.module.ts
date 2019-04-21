import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ListPage } from '../pages/list/list';
import { LibretaContactosPage } from
  '../pages/libreta-contactos/libreta-contactos';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { NuevoContactoPage } from '../pages/nuevo-contacto/nuevo-contacto';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ContactService} from '../services/contact.service';
import { UserService } from '../services/user.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { fireBaseConfig } from '../app/firebase.credentials';
import { FirebaseDbProviderUser } from '../providers/firebase-db/firebase-db-user';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ListPage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage
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
    HomePage,
    LoginPage,
    RegisterPage,
    ListPage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactService,
    FirebaseDbProvider,
	UserService,
	FirebaseDbProviderUser
  ]
})
export class AppModule { }
