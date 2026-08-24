
// imports externos
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // importamos router para redirigir al home tras el logout
import { MatButtonModule } from '@angular/material/button';

// imports "internos"
import { AuthService } from '../../../services/auth.service'; // importamos servicio de auth para gestionar el logout


@Component({
  selector: 'app-header-private',
  imports: [MatButtonModule],
  templateUrl: './header-private.component.html',
  styleUrl: './header-private.component.scss'
})
export class HeaderPrivateComponent {
  // constructor(private authService: AuthService, private router: Router) {} // inyectamos authservice y router en el constructor
  constructor(public authService: AuthService, private router: Router) {} // cambiamos apublic para que el html pueda acceder

  onLogout() {                        // este metodo se llamará cuando el usuario pulse el botón de salir o logout 
    this.authService.logout();
    this.router.navigate(['/']);
  }

}


