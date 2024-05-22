import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { GameComponent } from './game/game.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownComponent } from './dropdown/dropdown.component';

// Displaying the components
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, DropdownComponent, GameComponent, GridLayoutComponent, FooterComponent],
  styleUrl: './app.component.css',
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/bg3error.png"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-navbar></app-navbar>
        <app-dropdown></app-dropdown>
        <app-game></app-game>
        <app-grid-layout></app-grid-layout>
        <app-footer></app-footer>
      </section>
    </main>
  `,
})

export class AppComponent {}
