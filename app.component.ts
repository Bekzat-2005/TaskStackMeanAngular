import { Component } from '@angular/core';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddUserComponent, UserListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent { }
