import { createAction, props } from '@ngrx/store';
import { User } from '../entities/user';

export const retrieveUsers = createAction(
  '[User List/API] Get Users Success',
  props<{ users: ReadonlyArray<User> }>()
);
