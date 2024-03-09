import { CreateStoryDTO, GPTStory } from "../interfaces/story.interface";
import api from "./api";

const StoryService = {
  createStory: async (params: CreateStoryDTO) => {
    return await api.post<GPTStory>("/story", params);
  },
};

export default StoryService;
