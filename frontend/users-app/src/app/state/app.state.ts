import { User } from '../entities/user';

export interface AppState {
  books: ReadonlyArray<User>;
  collection: ReadonlyArray<number>;
}
