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
  userName: string = '';

  constructor(private userService: UserService) { }

  addUser(): void {
    if (this.userName.trim()) {
      this.userService.addUser(this.userName).subscribe(() => {
        alert('Қолданушы қосылды!');
        this.userName = '';
      });
    }
  }
}
