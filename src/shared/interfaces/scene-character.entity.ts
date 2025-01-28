import { BaseEntity } from "./baseEntity.interface";
import { ICharacter } from "./character.entity";
import { IStory } from "./story.entity";
import { IUserInteraction } from "./user-interaction.entity";

export enum CharacterEmotionEnum {
  HAPPY = "HAPPY",
  SAD = "SAD",
  SURPRISED = "SURPRISED",
  THINKING = "THINKING",
  CONFUSED = "CONFUSED",
  VERY_HAPPY = "VERY_HAPPY",
  NEUTRAL = "NEUTRAL",
  FRUSTRATED = "FRUSTRATED",
  EXCITED = "EXCITED",
}

export interface ISceneCharacter extends BaseEntity {
  characterId: ICharacter["id"];
  storyId: IStory["id"];
  order: number;
  speech: string;
  emotion: CharacterEmotionEnum | string;
  avatarUrl: string; // no implement

  interaction?: IUserInteraction;
  character?: ICharacter;
  story?: IStory;
}
