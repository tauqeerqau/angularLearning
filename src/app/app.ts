import { Component } from '@angular/core';
import { Login } from './login/login';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Login,Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = ['Tauqeer','Ali','Umer']
  count = this.users.length
}
