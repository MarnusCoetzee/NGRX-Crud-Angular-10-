export { User, Recruiter, Employee } from '../../../models/backend';

// requests models
export interface EmailPasswordCredentials {
  email: string;
  password: string;
}
