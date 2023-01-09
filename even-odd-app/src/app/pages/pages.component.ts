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

  getSmallestNumber (){
    if(this.number == undefined){
      this.msg = "Enter Valid input."
      return ;   
    }
   let newArray = this.number.split(',').map(Number); // ['1','2'] => [1,2] map converts string to number.
   let min = newArray[0];
   for(let i = 0 ; i < newArray.length; i++){
    if(min > newArray[i]){
      min = newArray[i];
    }
   }
   console.log(min);
   this.result = `${min} is a smallest number in array.`
  }

}
