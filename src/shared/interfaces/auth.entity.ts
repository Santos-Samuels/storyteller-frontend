import { IUser } from "./user.entity";

export interface IAuthData {
  userId: IUser["id"];
  token: string;
  apiKey: string;

  user?: IUser;
}

export interface AuthLoginDTO {
  email: string;
  password: string;
}

export interface AuthRegisterDTO {
  name: string;
  email: string;
  password: string;
  apiKey: string;
}

export interface AuthValidateTokenDTO {
  userId: IUser["id"];
  token: string;
}
