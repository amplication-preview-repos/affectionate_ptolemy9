import { Auth as TAuth } from "../api/auth/Auth";

export const AUTH_TITLE_FIELD = "token";

export const AuthTitle = (record: TAuth): string => {
  return record.token?.toString() || String(record.id);
};
