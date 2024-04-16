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
  scenes?: IScene[];
}

export interface CreateStoryDTO {
  theme: string;
}

export type CreateStoryResponse = {
  mainStory: IStory;
  ramificationsStories?: IStory[];
};
