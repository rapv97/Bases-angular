import { Component } from "@angular/core";




@Component({
  selector: 'app-counter',
  template: `
<h3> Counter: {{ counter }}</h3>
<button (click)="increment( 1 )">  +1 </button>
<button (click)="decrement( 1 )">  -1 </button>
<button (click)="reset()"> Reset </button>


  `,
})
export class CounterComponent {
  public counter: number = 10;

  public increment( value: number ):void{
    this.counter += value;
  }

  public decrement( value: number ):void{
    this.counter -= value;
  }

  public reset():void{
    this.counter = 10;

  }
}
