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
  caracterSpriteUrl: string; // baseSpriteRef + emotion
  speech: string;
  emotion: EmotionTypes;
  position: ScenePosition;
  backgroundUrl: string;
  ramificationTheme?: string;

  caracter?: ICaracter;
}
