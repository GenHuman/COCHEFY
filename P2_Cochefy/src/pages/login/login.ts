import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AnunciosPage } from '../anuncios/anuncios';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { AnunciosArrendadorPage } from '../anuncios-arrendador/anuncios-arrendador';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;
  userType: string;

  userList: Array<User> = [];

  constructor(public navCtrl: NavController, private UserService: UserService, private notifier: NotifierService) {

    this.UserService
      .getUsers().valueChanges()
      .subscribe(userList => {
        userList.forEach((item) => {
          this.userList.push(item);
        });
      });

  }

  login() {
    if (!this.username || !this.password) {
      this.notifier.notify( 'error', "Por favor, rellena todos los campos" );
    } else {
      var isCorrect = false;
      var exists = false;
      this.userList.forEach((item) => {
        if (!exists) {
          if (item.username == this.username) {
            exists = true;
            if (item.password == this.password) {
              isCorrect = true;
              window.localStorage.setItem("username", JSON.stringify(this.username));
              if (item.userType == "lessor") {
                this.navCtrl.setRoot(AnunciosPage)
              } else {
                this.navCtrl.setRoot(AnunciosArrendadorPage)
              }
            }
          }
        }
      });
      if (!exists) {
          this.notifier.notify( 'error', "El nombre de usuario no existe" );
      }
      if (!isCorrect && exists) {
        this.notifier.notify( 'error', "Contraseña incorrecta" );
      }
    }
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
