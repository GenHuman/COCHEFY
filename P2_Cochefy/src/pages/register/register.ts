import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { NotifierService } from 'angular-notifier';

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

  userList: Array<User> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private UserService:UserService, private notifier: NotifierService) {


	this.UserService
    .getUsers().valueChanges()
	 .subscribe(userList => {
				//userList = userList;
                console.log(userList);
                userList.forEach((item) => {
					this.userList.push(item);
					console.log(this.userList);
                   console.log(item.username);
                });
            });


  }

	register(value: {username:string,password:string,userType:string}) {

		var usernameInUse = false;
		if (!this.username || !this.password || !this.repassword || !this.userType){
          this.notifier.notify( 'error', "Por favor, rellena todos los campos" );
		} else if (this.password != this.repassword){
          this.notifier.notify( 'error', "Las contraseñas deben ser iguales" );
		} else {
			//alert(this.userList);
			this.userList.forEach((item) => {
				if(!usernameInUse){
					console.log(item.username);
					console.log(item.username == this.username);
					if(item.username == this.username){
						usernameInUse = true;
                          this.notifier.notify( 'error', "Ese nombre de usuario ya existe" );
					}
				}
			});
			if(!usernameInUse){
				 if (this.userType=="company"){
					  this.UserService.addUser(value);
                      this.notifier.notify( 'success', "Registro completado! Bienvenido!" );
					  this.navCtrl.push(LoginPage);
				} else {
					this.UserService.addUser(value);
                    this.notifier.notify( 'success', "Registro completado! Bienvenido!" );
					this.navCtrl.push(LoginPage);
				}
			}

        }
	}
		  /*for(var user of this.users$){
			  alert(user.username);
			if(user.username == username && !usernameInUse){
				alert ("That username is already in use");
				usernameInUse = true;
			}
		  }*/





}
