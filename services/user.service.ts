import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  api = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(this.api);
  }

  addUser(name: string) {
    return this.http.post(this.api, { name });
  }
}
