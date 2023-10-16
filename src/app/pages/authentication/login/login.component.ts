import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class AppSideLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    this.userService.login(this.email, this.password).subscribe(
      (response) => {
        const token = response.token;

        localStorage.setItem('token', token);

        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
