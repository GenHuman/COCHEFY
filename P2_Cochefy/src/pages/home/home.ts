import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    username:string;
    userType:string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.username = navParams.get('username');
      this.userType = navParams.get('userType');
    }

    ionViewDidLoad() {
        console.log(this.username);
        console.log(this.userType);
    }

}
