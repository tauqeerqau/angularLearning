import { Component } from '@angular/core';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = ['Tauqeer','Ali','Umer']
  count = this.users.length
}
