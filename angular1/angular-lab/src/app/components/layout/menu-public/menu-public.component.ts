import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu-public',
  imports: [RouterLink, MatToolbarModule],
  templateUrl: './menu-public.component.html',
  styleUrl: './menu-public.component.scss'
})
export class MenuPublicComponent {

}
