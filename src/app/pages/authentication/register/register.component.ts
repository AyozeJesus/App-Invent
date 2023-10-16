import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class AppSideRegisterComponent {
  constructor(private router: Router, private userService: UserService) {}

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      // Obtener los valores del formulario sin valores potencialmente nulos o indefinidos
      const username = this.form.value.username || '';
      const email = this.form.value.email || '';
      const password = this.form.value.password || '';
      const category = this.form.value.category || '';

      const user: User = {
        username,
        email,
        password,
        category,
      };

      this.userService.createUser(user).subscribe(
        (newUser) => {
          console.log('Usuario registrado con éxito', newUser);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Error al registrar el usuario', error);
        }
      );
    }
  }
}
