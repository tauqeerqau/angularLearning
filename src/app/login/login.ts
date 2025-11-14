import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usersList = [
    {name:'Tauqeer',age:40,gender:'male'},
    {name:'Umer',age:40,gender:'male'},
    {name:'Arfa',age:40,gender:'female'},
    {name:'Abdullah',age:40,gender:'male'},
    {name:'Aiman',age:40,gender:'female'}
  ]
  name:string | number = "20"
  userName = ""
  displayIfElseDiv = true
  color = ""
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

  ifElseFlow(val:string){
    if(val=='show'){
      this.displayIfElseDiv = true
    }
    else if(val=='hide'){
      this.displayIfElseDiv = false
    }
    else
      this.displayIfElseDiv = !this.displayIfElseDiv
  }

  switchButtonClick(){
    this.color = 'red'
  }

  changeColor(event:Event){
    this.color = (event.target as HTMLInputElement).value

  }

}
