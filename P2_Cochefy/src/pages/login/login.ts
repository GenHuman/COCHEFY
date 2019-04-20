import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  login () {
      if (!this.username || !this.password){
          alert ("Please fill all fields");
      } else {
          this.navCtrl.setRoot(HomePage, {
             username: this.username,
             userType: "lessor",
          });
      }
  }

  goRegister () {
      this.navCtrl.push(RegisterPage);
  }

}
