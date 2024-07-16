import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthServiceBase } from "./base/auth.service.base";

@Injectable()
export class AuthService extends AuthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
