export interface User {
  id: number;
  username: string;
  name: string | null;
  last_name: string | null;
  address: string | null;
  gender: string | null;
  password: string;
  created_at: Date;
}
