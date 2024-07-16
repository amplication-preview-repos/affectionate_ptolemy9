import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthCreateInput = {
  expiresAt?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
