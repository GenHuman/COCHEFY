import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseDbProviderUser } from '../../providers/firebase-db/firebase-db-user';

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
  
  users$: Observable<User[]>;
  userList;

  constructor(public navCtrl: NavController, public navParams: NavParams, private UserService:UserService, public dbFirebase:FirebaseDbProviderUser) {
  
  this.users$ = this.UserService
    .getUsers().snapshotChanges() //cambios
    .map(
      changes => {
		  
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  ngOnInit()
 {
	 
   
	//alert(users$);
 }

  register(value: {nombre:string,contrasenha:string,tipo:string}) {  
   /*this.users$ = this.UserService
    .getUsers().snapshotChanges() //cambios
    .map(
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      }); */
	  var usernameInUse = false;
      if (!this.username || !this.password || !this.repassword || !this.userType){
          alert ("Please fill all fields");
      } else if (this.password != this.repassword){
          alert ("The two passwords must be the same");
      } else {
		  alert(this.UserService.getUserByName(this.username));
		  /*for(var user of this.users$){
			  alert(user.username);
			if(user.username == username && !usernameInUse){
				alert ("That username is already in use");
				usernameInUse = true;
			}
		  }*/
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

}
