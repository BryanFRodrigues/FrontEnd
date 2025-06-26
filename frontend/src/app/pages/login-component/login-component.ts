import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../auth-service';

@Component({
  selector: 'app-login-component',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss'] 
})
export class LoginComponent {
  cpf: string = '';
  erroLogin: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin() {
    this.erroLogin = null;
    this.authService.login(this.cpf).subscribe({
      next: () => {
 
        this.router.navigate(['/']);
      },
      error: (err) => {
        // exibe mensagem de erro na tela
        this.erroLogin = 'CPF inválido ou não cadastrado.';
        console.error('Erro no login', err);
      }
    });
  }
}
