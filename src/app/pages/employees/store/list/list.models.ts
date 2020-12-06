import { User as DBUser, Employee } from '../../../../../models/backend';

export interface User extends DBUser {
  role: Employee;
}
