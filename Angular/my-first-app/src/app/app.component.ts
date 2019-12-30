import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `<div>								
<h1>Angular routes</h1>
<router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
}
