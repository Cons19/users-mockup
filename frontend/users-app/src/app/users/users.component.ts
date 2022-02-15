import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];

  first = 0;

  rows = 5;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.users ? this.first === (this.users.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }

}
