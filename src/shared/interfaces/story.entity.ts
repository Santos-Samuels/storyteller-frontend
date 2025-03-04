import { BaseEntity } from "./baseEntity.interface";
import { ICharacter } from "./character.entity";
import { ISceneCharacter } from "./scene-character.entity";
import { IUser } from "./user.entity";

export interface IStory extends BaseEntity {
  theme: string;
  title: string;
  intro: string;
  summary: string;
  backgroundUrl: string; // no implement
  authorId: IUser["id"];

  characters?: ICharacter[];
  sceneCharacters?: ISceneCharacter[];
}

export enum StorySizeEnum {
  "Short" = 10,
  "Normal" = 20,
  "Long" = 30,
}

export interface GenerateStoryDTO {
  theme: string;
  amountScenes: number;
}
