import { createReducer, on } from '@ngrx/store';

import { retrieveUsers } from './users.actions';
import { User } from '../entities/user';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(retrieveUsers, (state, { users }) => users)
);
