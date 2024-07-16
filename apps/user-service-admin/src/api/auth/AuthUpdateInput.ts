import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthUpdateInput = {
  expiresAt?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
