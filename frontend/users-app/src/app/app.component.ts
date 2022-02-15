import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUserCollection, selectUsers } from './state/users.selectors';
import {
  retrieveUsers
} from './state/users.actions';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-app';
  users$ = this.store.select(selectUsers);
  usersCollection$ = this.store.select(selectUserCollection);

  constructor(
    private usersService: UserService,
    private store: Store
  ) {}

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe((users) => this.store.dispatch(retrieveUsers({ users })));
  }
}
