import { Module } from "@nestjs/common";
import { AuthModuleBase } from "./base/auth.module.base";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";

@Module({
  imports: [AuthModuleBase],
  controllers: [AuthController],
  providers: [AuthService, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}
