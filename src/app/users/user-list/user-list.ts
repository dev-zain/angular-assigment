import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserList implements OnInit {
  users: User[] = [];
  loading = true;
  error = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('UserList: ngOnInit -> fetching users');
    this.userService.getUsers().pipe(
      finalize(() => {
        console.log('UserList: request finalized');
        this.loading = false;
      })
    ).subscribe({
      next: data => {
        console.log('UserList: received', data?.length, 'users');
        this.users = data;
      },
      error: err => {
        console.error('UserList: error fetching users', err);
        this.error = 'Failed to load users';
      }
    });
  }
}