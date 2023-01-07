import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Even Odd Program';

  number: number;
  result = ""

  elements: number[] = [];

  //if values are initalized in variables there is no need to add constructor 
  constructor() {
    this.number = 0;
  }

  //Find out number to be even or odd...
  evenOdd() {
    console.log('Hi I am Even Odd Program');
    this.elements = [];
    if (this.number % 2 == 0) {
      this.result = this.number + " is Even Number."
    } else {
      this.result = this.number + " is Odd Number."
    }
  }

  // Even numbers storing in Array
  evenArray() {
    this.result = "";
    this.elements = [];
    for (let i = 2; i < this.number; i++) {
      if (i % 2 == 0) {
        this.elements.push(i);
      }
    }
  }

  // Odd numbers storing in Array
  oddArray() {
    this.result = "";
    this.elements = [];
    for (let i = 0; i < this.number; i++) {
      if (i % 2 == 1) {
        this.elements.push(i);
      }
    }
  }



  //Number is palindrome or not
  getPalindrome() {
    this.result = " ";
    this.elements = [];
    let temp = this.number;
    let rem ;
    let reverse = 0;
    while(temp > 0) {
      rem = temp % 10; //1 
      reverse = reverse * 10 + rem; //1
      temp = Math.floor(temp / 10);
    }
    console.log(reverse);
    if (this.number == reverse) {
      this.result = this.number + "Number is palindrome."
    } else {
      this.result = this.number + "Number is not palindrome."
    }
  }

  getArmstrong(){

  }
}
