import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { MessagesHelper } from "src/app/helpers/messages.helper";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private readonly authService: AuthService){
    super({
      usernameField: 'email'
    })
  }
  async validate(email: string, senha: string){
      const user = await this.authService.validateUser(email, senha);
      if(!user) 
        throw new UnauthorizedException(MessagesHelper.PASSWORD_OR_EMAIL_INVALID);
      return user;
  }
}