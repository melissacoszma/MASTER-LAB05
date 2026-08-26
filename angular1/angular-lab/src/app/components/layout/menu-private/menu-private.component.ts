import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'; // importamos router para redirigir al home tras el logout
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; // necesario para usar mat-raised-button

// imports "internos"
import { AuthService } from '../../../services/auth.service'; // importamos servicio de auth para gestionar el logout


@Component({
  selector: 'app-menu-private',
  imports: [RouterLink , MatToolbarModule, MatButtonModule],
  templateUrl: './menu-private.component.html',
  styleUrl: './menu-private.component.scss'
})
export class MenuPrivateComponent {
   // constructor(private authService: AuthService, private router: Router) {} // inyectamos authservice y router en el constructor
  constructor(public authService: AuthService, private router: Router) {} // cambiamos apublic para que el html pueda acceder

  onLogout() {                        // este metodo se llamará cuando el usuario pulse el botón de salir o logout 
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
