import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from  '../../models/User';

import { UserService } from '../../services/user.service';

@Component({
selector : 'app-users',
templateUrl : './users.component.html',
styleUrls : ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName:'',
    lastName:'',
    email:'',
  };
  users: User[];
  enbaleAdd:boolean = false;
  showExtened:boolean = false;
  loaded:boolean = true;
  showUserForm:boolean = false;
  @ViewChild('userForm')form:any;
  data:any;

  constructor(private userService : UserService) {
  }

  ngOnInit(){
    this.userService.getData().subscribe(data =>{
      console.log(data);
    })
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
    });
   }

  toggleHide(user: User){
    user.hide = !user.hide;
  }

  onSubmit({value, valid}:{value:User, valid:boolean}){
    if(!valid){
      console.log("Form is not valid");
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }

}
