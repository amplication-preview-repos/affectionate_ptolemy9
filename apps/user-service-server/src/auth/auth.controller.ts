import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthControllerBase } from "./base/auth.controller.base";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController extends AuthControllerBase {
  constructor(protected readonly service: AuthService) {
    super(service);
  }
}
