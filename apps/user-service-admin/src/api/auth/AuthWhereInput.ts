import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthWhereInput = {
  id?: StringFilter;
  expiresAt?: DateTimeNullableFilter;
  token?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
