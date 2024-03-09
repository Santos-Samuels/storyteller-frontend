import { BaseEntity } from "./baseEntity.interface";
import { Role } from "./role.interface";

export interface User extends BaseEntity {
  name: string;
  email: string;
  password: string;
  roleId: Role["id"];

  role?: Role;
}
