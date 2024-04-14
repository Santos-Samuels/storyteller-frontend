import { BaseEntity } from "./baseEntity.interface";
import { ICaracter } from "./caracter.interface";
import { IStory } from "./story.interface";

export type EmotionTypes =
  | "happy"
  | "sad"
  | "surprised"
  | "thinking"
  | "confused"
  | "very-happy"
  | "neutral";

export type ScenePosition = "left" | "right";

export interface IScene extends BaseEntity {
  storyId: IStory["id"];
  caracterId: ICaracter["id"];
  caracterSpriteRef: string; // baseSpriteRef + emotion
  speech: string;
  emotion: EmotionTypes;
  position: ScenePosition;
  backgroundRef: string;
  ramificationTheme?: string;

  caracter?: ICaracter;
  story?: IStory;
}
