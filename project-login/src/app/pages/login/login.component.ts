import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user-model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

    
    login(user : User){
      console.log(user.name);
      console.log(user.IDname);
      console.log(user.password);
    }
    
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
}
