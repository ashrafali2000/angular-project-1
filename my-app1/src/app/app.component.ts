import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Hello my First Angular Project</h1>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app1';
}
