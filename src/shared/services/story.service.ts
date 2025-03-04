import { GenerateStoryDTO, IStory } from "../interfaces/story.entity";
import api from "./api";

const StoryService = {
  generate: async (params: GenerateStoryDTO) => {
    return api.post<IStory>("/story/generate", params);
  },
  getById: async (id: IStory["id"]) => {
    return api.get<IStory>(`/story/${id}`);
  },
  getAll: async () => {
    return api.get<IStory[]>("/story");
  },
  delete: async (id: IStory["id"]) => {
    return api.delete<void>(`/story/${id}`);
  },
};

export default StoryService;
