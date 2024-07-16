/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Auth } from "./Auth";
import { AuthCountArgs } from "./AuthCountArgs";
import { AuthFindManyArgs } from "./AuthFindManyArgs";
import { AuthFindUniqueArgs } from "./AuthFindUniqueArgs";
import { CreateAuthArgs } from "./CreateAuthArgs";
import { UpdateAuthArgs } from "./UpdateAuthArgs";
import { DeleteAuthArgs } from "./DeleteAuthArgs";
import { User } from "../../user/base/User";
import { AuthService } from "../auth.service";
@graphql.Resolver(() => Auth)
export class AuthResolverBase {
  constructor(protected readonly service: AuthService) {}

  async _authsMeta(
    @graphql.Args() args: AuthCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Auth])
  async auths(@graphql.Args() args: AuthFindManyArgs): Promise<Auth[]> {
    return this.service.auths(args);
  }

  @graphql.Query(() => Auth, { nullable: true })
  async auth(@graphql.Args() args: AuthFindUniqueArgs): Promise<Auth | null> {
    const result = await this.service.auth(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Auth)
  async createAuth(@graphql.Args() args: CreateAuthArgs): Promise<Auth> {
    return await this.service.createAuth({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Auth)
  async updateAuth(@graphql.Args() args: UpdateAuthArgs): Promise<Auth | null> {
    try {
      return await this.service.updateAuth({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Auth)
  async deleteAuth(@graphql.Args() args: DeleteAuthArgs): Promise<Auth | null> {
    try {
      return await this.service.deleteAuth(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Auth): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
