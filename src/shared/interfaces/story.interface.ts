import { BaseEntity } from "./baseEntity.interface";
import { IScene } from "./scene.interface";
import { User } from "./user.interface";

export interface IStory extends BaseEntity {
  userId: User["id"];
  theme: string;
  summary: string;
  ramifications?: string[];
  isRamification?: boolean;

  user?: User;
}

export type GPTStoryScene = Pick<
  IScene,
  "speech" | "emotion" | "position" | "ramificationTheme"
>;

export interface GPTStory {
  theme: IStory["theme"];
  summary: IStory["summary"];
  ramifications?: IStory["ramifications"];
  isRamification: IStory["isRamification"];

  scenes: GPTStoryScene[];
}

export interface CreateStoryDTO {
  theme: string;
}

export type CreateStoryResponse = {
  mainStory: GPTStory;
  ramificationsStories?: GPTStory[];
};
