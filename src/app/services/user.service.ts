import { Injectable } from '@angular/core';

import { User } from '../models/user';

import { Observable } from 'rxjs/Rx';

import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() {
      this.users = [{
      firstName: 'Suhas',
      lastName: 'Moudgalya',
      email: 'suhas@sms.com',
      isActive:true,
      hide: true
    },
    {
      firstName: 'Vikasini',
      lastName: 'Moudgalya',
      email: 'vikasini@sms.com',
      isActive:false,
      hide: true
    }
    ];
   }

  getData(){
    this.data = new Observable(observer =>{
      setTimeout(()=> {
        observer.next(1);
      },1000);

       setTimeout(()=> {
        observer.next(2);
      },2000);

       setTimeout(()=> {
        observer.next(3);
      },3000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
   }

  addUser(user:User){
     this.users.unshift(user);
   }

}
