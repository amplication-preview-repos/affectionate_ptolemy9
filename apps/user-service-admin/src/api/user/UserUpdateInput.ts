import { InputJsonValue } from "../../types";
import { AuthUpdateManyWithoutUsersInput } from "./AuthUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  auths?: AuthUpdateManyWithoutUsersInput;
};
