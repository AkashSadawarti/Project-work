import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'src/app/model/subscription.model';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private message: string;
  private BASE_URL: string = "http://localhost:3000/cards";

  constructor(private http : HttpClient) { 
    this.message = " ";
  }

  getSubscriptionList(): Observable<Object> {
    return this.http.get(`${this.BASE_URL}`);
  }
}
