import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  title : string = "Angular Learning";

  name : string = "Akash";

  public topic ="Data binding"

  public topic1 = " Interpolations and Property binding : {{}}"
  public topic2 = " property Binding by : [] square brackets. "

  public image = "../assets/hacker.png"

  public topic3 = "Event Binding"

  onClick(){
    alert("Let's Learn Angular.");
  }

  public topic4  = "Two way Data Binding."
   public value = "";
}
