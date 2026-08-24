import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false; // inicializacion 
  private username = '';

  constructor() {
  this.loggedIn = localStorage.getItem('isLogged') === 'true'; // al arrancar lee el estado guardado y si existia una sesion privada la recupera
  this.username = localStorage.getItem('username') ?? '';
}

  login(credentials: { username: string, password: string }): boolean {
    if (credentials.username === 'master@lemoncode.net' && credentials.password === '12345678') {
      this.loggedIn = true;
      this.username = credentials.username;

      localStorage.setItem('isLogged', 'true');       // guarda el estado en localstorage
      localStorage.setItem('username', credentials.username);

      return true;
    }
    return false;
  }
  
  logout(): void {
    this.loggedIn = false; 
    this.username = '';

    localStorage.removeItem('isLogged'); // limpia localstorage explicitamente al salir
    localStorage.removeItem('username');

  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}