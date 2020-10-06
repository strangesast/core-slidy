import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div>Count: {{count$ | ngrxPush}}</div>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  count$ = interval(1000);
}
