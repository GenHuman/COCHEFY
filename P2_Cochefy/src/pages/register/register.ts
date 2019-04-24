import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

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
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private UserService:UserService) {
  
  
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  ngOnInit()
 {
	 /*this.UserService
    .getUsers().valueChanges() //cambios
	 .subscribe(userList => {
				//userList = userList;
                console.log(userList);
                userList.forEach((item) => {
                   console.log(item.username);
                });
            });*/
    /*.map(
      changes => {
		  
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      }); 
   
	alert(userList);*/
 }

	register(value: {username:string,password:string,userType:string}) {  

		var usernameInUse = false;
		if (!this.username || !this.password || !this.repassword || !this.userType){
			alert ("Please fill all fields");
		} else if (this.password != this.repassword){
			alert ("The two passwords must be the same");
		} else {
			//alert(this.userList);
			this.userList.forEach((item) => {
				if(!usernameInUse){
					console.log(item.username);
					console.log(item.username == this.username);
					if(item.username == this.username){
						usernameInUse = true;
						console.log("existe");
						alert ("That username is already in use");
					}
				}
			});
			if(!usernameInUse){
				 if (this.userType=="company"){
					  this.UserService.addUser(value);
					  this.navCtrl.push(LoginPage);
				} else {
					this.UserService.addUser(value);
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
