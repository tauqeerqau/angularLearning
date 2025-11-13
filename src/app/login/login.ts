import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  name:string | number = "20"
  clickMe(){
    console.log("Button is Clicked")
    this.name = 100
  }
}
