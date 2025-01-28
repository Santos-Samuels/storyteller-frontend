import { BaseEntity } from "./baseEntity.interface";
import { ISceneCharacter } from "./scene-character.entity";
import { IStory } from "./story.entity";
import { IUserInteractionOption } from "./user-interaction-option.entity";

export interface IUserInteraction extends BaseEntity {
  storyId: IStory["id"];
  sceneCharacterId: ISceneCharacter["id"];

  sentence: string;
  options: IUserInteractionOption[];
}
