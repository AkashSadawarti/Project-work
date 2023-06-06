import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card-service/card.service';
import { Card } from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  
  card : Card = {
    subscriptions: []
  }
  
  constructor(private cardservice : CardService){
      console.log("card Api success");    
  }

  getSubscriptions(){
    this.cardservice.getSubscriptionList().subscribe((res :  any)=>{
        console.log(res);
        this.card = res;
    });
  }

}
