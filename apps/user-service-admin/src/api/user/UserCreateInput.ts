import { InputJsonValue } from "../../types";
import { AuthCreateNestedManyWithoutUsersInput } from "./AuthCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  auths?: AuthCreateNestedManyWithoutUsersInput;
};
