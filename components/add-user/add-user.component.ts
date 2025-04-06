import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {
  userName = '';
  constructor(private service: UserService) {}
  addUser() {
    if (this.userName.trim()) {
      this.service.addUser(this.userName).subscribe(() => alert('Қосылды!'));
      this.userName = '';
    }
  }
}

