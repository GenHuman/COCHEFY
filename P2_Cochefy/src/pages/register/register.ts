import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string;
  password:string;
  repassword:string;
  userType:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {

      if (!this.username || !this.password || !this.repassword || !this.userType){
          alert ("Please fill all fields");
      } else if (this.password != this.repassword){
          alert ("The two passwords must be the same");
      } else {
          if (this.userType=="company"){
              this.navCtrl.push(LoginPage);
          } else {
              this.navCtrl.push(LoginPage);
          }
      }

  }

}
