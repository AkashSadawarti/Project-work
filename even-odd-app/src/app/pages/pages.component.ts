import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  head = 'Array Operations';
  note = 'Enter comma seperated values'

  number !: string;
  msg = "";
  result = "";

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

  getLargestNumber() {
    this.result = "";
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

  getArrayLength() {
    this.result = "";
    if (this.number == undefined) {
      this.msg = "Enter valid input."
      return;
    }
    let newArray = this.number.split(",").map(Number);
    let ArrayLen = newArray.length;
    this.result = `Result : ${ArrayLen} is the length of Array.`
  }

  getReverseArray(){
    this.result = "";
    if(this.number == undefined){
      this.msg = "Enter Valid input."
      return ;   
    }
    let newArray = this.number.split(",").map(Number);
    let resArray = [];
    for(let i=newArray.length; i >= 0;i--){

       resArray.push(newArray[i]);  
      }
      // console.log(resArray);
    this.result = `Result : ${resArray} is reversed Array`
  }

  getOddElements(){
    this.result= "";
    if(this.number == undefined){
      this.msg = "Enter vslid input";
    }
    let newArray = this.number.split(",").map(Number);
    let resArray = [];
    for(let i =0;i<newArray.length;i++){
      if(newArray[i]%2 == 0){
        resArray.push(newArray[i]);
      }
    }
    this.result = `Result : ${resArray} is an Even Elements in Array.`
  }
}
