import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AnunciosPage } from '../anuncios/anuncios';
import { AnunciosArrendadorPage } from '../anuncios-arrendador/anuncios-arrendador';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username:string;
  password:string;
  userType:string;

  constructor(public navCtrl: NavController) {

  }

  login () {
      if (!this.username || !this.password){
          alert ("Please fill all fields");
      } else {
          window.localStorage.setItem("username",JSON.stringify(this.username));
          this.userType = "lessor";
          if (this.userType == "lessor"){
              this.navCtrl.setRoot(AnunciosPage)
          } else {
              this.navCtrl.setRoot(AnunciosArrendadorPage)
          }
      }
  }

  goRegister () {
      this.navCtrl.push(RegisterPage);
  }

}
