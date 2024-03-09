import { BaseEntity } from "./baseEntity.interface";

export interface ICaracter extends BaseEntity {
  name: string;
  baseSpriteRef: string;
}
