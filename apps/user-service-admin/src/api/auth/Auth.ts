import { User } from "../user/User";

export type Auth = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date | null;
  token: string | null;
  user?: User | null;
};
