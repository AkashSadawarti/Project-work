import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  template:`<p>medium : {{toDate | date:'medium'}} </p>`, //Angular pipe Example of Date
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  head = 'Array Operations';
  note = 'Enter comma seperated values';
  toDate : Date = new Date();
  
  number !: string;
  msg = "";
  result = "";
  
  Array: number[] = [];

  //Smallest Element in Array
  getSmallestNumber() {
    if (this.number == undefined) {
      this.msg = "Enter valid input."
      return;
    }
    let newArray = this.number.split(',').map(Number); // ['1','2'] => [1,2] map converts string to number.
    let min = newArray[0];
    for (let i = 0; i < newArray.length; i++) {
      if (min > newArray[i]) {
        min = newArray[i];
      }
    }
    console.log(min);
    this.result = `Result : ${min} is a smallest number in array.`
  }

  //Largest Element in Array
  getLargestNumber() {
    this.result = "";
    this.Array = [];
    if (this.number == undefined) {
      this.msg = "Enter valid input."
      return;
    }
    let newArray = this.number.split(',').map(Number); // ['1','2'] => [1,2] map converts string to number.
    let min = newArray[0];
    for (let i = 0; i < newArray.length; i++) {
      if (min < newArray[i]) {
        min = newArray[i];
      }
    }
    console.log(min);
    this.result = `Result : ${min} is a Largest number in array.`
  }

  //Length Array
  getArrayLength() {
    this.result = "";
    this.Array = [];
    if (this.number == undefined) {
      this.msg = "Enter valid input."
      return;
    }
    let newArray = this.number.split(",").map(Number);
    let ArrayLen = newArray.length;
    this.result = `Result : ${ArrayLen} is the length of Array.`
  }

  //Reverse Array 
  getReverseArray(){
    this.result = "";
    this.Array = []
    if(this.number == undefined){
      this.msg = "Enter Valid input."
      return ;   
    }
    let newArray = this.number.split(",").map(Number);
  
    for(let i=newArray.length-1; i >= 0;i--){

       this.Array.push(newArray[i]);  
      }
      // console.log(resArray);
    //this.result = `Result : ${this.Array} is reversed Array`
  }

  //Even Elements in Array
  getEvenElements(){
    this.result= "";
    this.Array = []
    if(this.number == undefined){
      this.msg = "Enter valid input";
    }
    let newArray = this.number.split(",").map(Number);
    let resArray = [];
    for(let i =0;i<newArray.length;i++){
      if(newArray[i]%2 == 0){
        resArray.push(newArray[i]);
      }
    }
    this.Array = resArray;
  }

  //Odd elementsin Array
  getOddElements(){
    this.result= "";
    this.Array = []
    if(this.number == undefined){
      this.msg = "Enter valid input";
    }
    let newArray = this.number.split(",").map(Number);
    let resArray = [];
    for(let i =0;i<newArray.length;i++){
      if(newArray[i]%2 == 1){
        resArray.push(newArray[i]);
      }
    }
   this.Array = resArray;
  }
}
