import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-simple',
  template: `
  <p>Simple!</p>
  <p>Count is {{count$ | ngrxPush}}</p>
  <div>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  </div>
  `,
  styles: [],
})
export class SimpleComponent implements OnInit {
  count$ = new BehaviorSubject(0);

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count$.next(this.count$.getValue() + 1);
  }

  decrement() {
    this.count$.next(this.count$.getValue() - 1);
  }
}
