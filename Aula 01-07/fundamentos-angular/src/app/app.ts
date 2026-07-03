import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Square } from './components/square/square';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Square],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fundamentos-angular');
}
