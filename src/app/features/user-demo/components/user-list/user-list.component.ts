import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../core/models/user.model';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: false
})
export class UserList implements OnInit {
  // Observable qui contiendra le flux de données
  users$!: Observable<User[]>;
  selectedUser?: User;

  // Injection du service via le constructeur
  constructor(private dataService: DataService) { }

  // Initialisation dans le hook ngOnInit
  ngOnInit(): void {
    this.users$ = this.dataService.getUsers();
  }

  handleUserSelection(user: User): void {
    this.selectedUser = user;
  }
}