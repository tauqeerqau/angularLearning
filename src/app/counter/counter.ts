import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counterValue = 90

  setValue(value:string){
    if(value == "increment")
      this.counterValue = this.counterValue+1
    else if (value == "decrement"){
      this.counterValue = this.counterValue-1
    }
    else
      this.counterValue =0
  }

}
