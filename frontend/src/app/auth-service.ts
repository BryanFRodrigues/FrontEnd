import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://animated-journey-94rj4wjwg75fprxj-8080.app.github.dev/auth'
  private chave = 'cliente'; 

  constructor(private http: HttpClient, private router: Router) {}

  login(cpf: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { cpf }).pipe(
      tap(cliente => {
        sessionStorage.setItem(this.chave, JSON.stringify(cliente));
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.chave);
    this.router.navigate(['']);
  }

  estaLogado(): boolean {
    return sessionStorage.getItem(this.chave) !== null;
  }

  getCliente(): any {
    const data = sessionStorage.getItem(this.chave);
    return data ? JSON.parse(data) : null;
  }
}
