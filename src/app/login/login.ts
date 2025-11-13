import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  name:string | number = "20"
  userName = ""
  clickMe(){
    console.log("Button is Clicked")
    this.name = 100
  }

  setText(){
    this.userName = "Tauqeer ul Hassan"
  }

  getUserName(event:Event){
    const name = (event.target as HTMLInputElement).value
    this.userName = name
  }

  getUserNameWithTemplate(value:string){
    console.log(`Name entered is: ${value}`);

  }

}
