import { Component, OnInit } from '@angular/core';

import { User } from  '../../models/User';

@Component({
selector : 'app-user',
templateUrl : './user.component.html',
//template : '<h2> Hello </h2>',
// styles : [
// `h2{
//   color: red;
// }`],
styleUrls : ['./user.component.css']
})

export class UserComponent implements OnInit {

  user: User;

  // firstName: string;
  // lastName: string;
  // age: number;
  // foo: any;
  // hasKinds: boolean;
  // numberArray: number[];
  // mixedArray: any[];
  // myTuple: [string, number, boolean];
  // unusable: void;
  // u: undefined;
  // n: null;
  // address = {
  //     area : 'Basavanagudi',
  //     city : 'Bengaluru'
  // };

  constructor() {
    // this.firstName = 'Suhas';
    // this.lastName = 'Moudgalya';
    // this.age = 30;
    // this.numberArray = [1,2,3];
    // this.mixedArray = [1,2,3,"Hi", "Hello", true];
    // this.myTuple = ["Hello", 23, false];
    // console.log('Hello User');
    // this.sayHello();
  }

  // sayHello() {
  //   console.log(`Hello ${this.firstName}`);
  // }

  // addNumbers(num1:number, num2:number):number {
  //   return num1 + num2 ;
  // }

  ngOnInit(){
      this.user = {
      firstName: 'Suhas',
      lastName: 'Moudgalya',
      email: 'suhas@sms.com'
    }
  }

}