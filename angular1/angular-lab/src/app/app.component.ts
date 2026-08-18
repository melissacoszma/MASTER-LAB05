import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPublicComponent } from './components/layout/header-public/header-public.component'; // hay que importar explícitamente cada componente que usemos en versiones modernas de angular
import { HeaderPrivateComponent } from './components/layout/header-private/header-private.component';
import { MenuPublicComponent } from './components/layout/menu-public/menu-public.component';
import { MenuPrivateComponent } from './components/layout/menu-private/menu-private.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-lab';
}
