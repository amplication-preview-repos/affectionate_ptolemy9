import * as graphql from "@nestjs/graphql";
import { AuthResolverBase } from "./base/auth.resolver.base";
import { Auth } from "./base/Auth";
import { AuthService } from "./auth.service";

@graphql.Resolver(() => Auth)
export class AuthResolver extends AuthResolverBase {
  constructor(protected readonly service: AuthService) {
    super(service);
  }
}
