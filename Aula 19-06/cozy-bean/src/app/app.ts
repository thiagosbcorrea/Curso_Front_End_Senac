import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Contadores } from './components/contadores/contadores';
import { NossaEssencia } from './components/nossa-essencia/nossa-essencia';
import { Carrossel } from './components/carrossel/carrossel';
import { Faq } from './components/faq/faq'; 
import { Galeria } from './components/galeria/galeria';
import { Formulario } from './components/formulario/formulario';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Carrossel, Contadores, Faq, Hero, NossaEssencia, Galeria, Formulario, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cozy-bean');
}
