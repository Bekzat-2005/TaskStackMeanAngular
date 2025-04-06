import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  users: any[] = [];
  constructor(private service: UserService) {
    service.getUsers().subscribe(u => this.users = u);
  }
}
