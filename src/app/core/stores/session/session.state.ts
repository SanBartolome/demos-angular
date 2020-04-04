import { ID } from '@datorama/akita';

export interface SessionState {
  loggedUserId?: ID;
  isLoadUserDone?: boolean;
}
