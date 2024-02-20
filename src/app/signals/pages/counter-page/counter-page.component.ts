import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal(10);
  //Una señal de solo lectura: se debe computar
  public squaredCounter = computed( () => this.counter() * this.counter() );

  increaseBy( value: number){
    this.counter.update( current => current + value );
  }

}
