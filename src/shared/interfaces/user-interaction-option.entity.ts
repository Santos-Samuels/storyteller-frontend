import { BaseEntity } from "./baseEntity.interface";
import { ISceneCharacter } from "./scene-character.entity";

export interface IUserInteractionOption extends BaseEntity {
  sceneCharacterId: ISceneCharacter["id"];
  nextSceneCharacterId: ISceneCharacter["id"];

  label: string;
  feedback: string;
  hasBeenChosen?: boolean;

  sceneCharacter?: ISceneCharacter;
}
