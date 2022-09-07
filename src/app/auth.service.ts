import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  constructor() {}

  estaAutenticado(): boolean {
    return !!localStorage.getItem('access-token');
  }

  login(email: string, senha: string): boolean {
    if (email == 'admin@admin.com' && senha == 'admin') {
      localStorage.setItem('access-token', this.accessToken);
      return true;
    }

    return false;
  }
  logout() {
    localStorage.removeItem('access-token');
  }
}
