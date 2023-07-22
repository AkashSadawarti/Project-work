import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  
       firstname : string = ""
       lastname : string = ""
       Address1 : string = ""
       Address2 : string = ""
       mobileno : number =0
       gender : string = ""
       city : string = ""
       state : string = ""
       pincode : number = 0
  
    Register(){
          console.log(this.firstname);
          console.log(this.lastname);
          console.log(this.Address1);
          console.log(this.Address2);
          console.log(this.mobileno);
          console.log(this.gender);
          console.log(this.city);
          console.log(this.state);
          console.log(this.pincode);
    }
}
