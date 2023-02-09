import { User } from 'src/app/shared/models/user/user';

export interface AuthState {
  loadingUser: boolean;
  user: User;
  error: any | null;
  token: string | null;
}
