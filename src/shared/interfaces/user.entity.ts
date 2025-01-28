import { BaseEntity } from "./baseEntity.interface";
import { IRole } from "./role.entity";

export interface IUser extends BaseEntity {
  name: string;
  email: string;
  password?: string;
  roleId: IRole["id"];

  role?: IRole;
}
