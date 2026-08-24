import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false; // inicializacion 
  private username = '';

  login(credentials: { username: string, password: string }): boolean {
    if (credentials.username === 'master@lemoncode.net' && credentials.password === '12345678') {
      this.loggedIn = true;
      this.username = credentials.username;
      return true;
    }
    return false;
  }
  
  logout(): void {
    this.loggedIn = false; 
    this.username = '';
  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}