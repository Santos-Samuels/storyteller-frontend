import { BaseEntity } from "./baseEntity.interface";
import { IScene } from "./scene.interface";
import { User } from "./user.interface";

export interface IStory extends BaseEntity {
  userId: User["id"];
  theme: string;
  resume: string;
  ramifications?: string[];

  user?: User;
}

export interface GPTStory {
  theme: IStory["theme"];
  resume: IStory["resume"];
  ramifications: IStory["ramifications"];

  scenes: Pick<IScene, "speech" | "emotion" | "position">[];
}

export interface CreateStoryDTO {
  theme: string;
}
