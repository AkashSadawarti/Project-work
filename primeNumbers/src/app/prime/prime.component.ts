import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { PrimeNumber } from '../model/prime';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  prime!: any;

  getPrime(prime: PrimeNumber) {
    console.log(prime.num);
    console.log(prime.result);
    if (prime.num != null) {
       let isPrime = true;
      for (let i = 2; i < prime.num; i++) {
        if (prime.num % i == 0) {
          this.prime.result = false;
          break;
        }
      }
      if(!isPrime){
        console.log('Number is not prime number')
      }else{
        console.log('Number is prime number')
      }
    }


  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
