import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './listEmployee.component.html',
  styleUrls: ['./listEmployee.component.css'],
})
export class AppEmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'email', 'created_at']; // Agrega más columnas si es necesario
  workers: User[] = [];
  administrators: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsersByCategory('trabajador');
    this.getUsersByCategory('administrador');
  }

  getUsersByCategory(category: string) {
    this.userService.getUsersByCategory(category).subscribe((users) => {
      if (category === 'trabajador') {
        this.workers = users;
      } else if (category === 'administrador') {
        this.administrators = users;
      }
    });
  }
}
