import { BaseEntity } from "./baseEntity.interface";
import { IStory } from "./story.entity";

export enum CharacterPositionEnum {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  CENTER = "CENTER",
}

export enum CharacterGenderEnum {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export interface ICharacter extends BaseEntity {
  storyId: IStory["id"];

  name: string;
  role: string;
  position: CharacterPositionEnum;
  gender: CharacterGenderEnum;
  avatarUrl: string; // no implement

  story?: IStory;
}
