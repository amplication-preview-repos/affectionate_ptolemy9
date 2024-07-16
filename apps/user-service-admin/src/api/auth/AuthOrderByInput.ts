import { SortOrder } from "../../util/SortOrder";

export type AuthOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  expiresAt?: SortOrder;
  token?: SortOrder;
  userId?: SortOrder;
};
