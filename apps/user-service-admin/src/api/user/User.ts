import { JsonValue } from "type-fest";
import { Auth } from "../auth/Auth";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  auths?: Array<Auth>;
};
