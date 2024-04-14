import { CreateStoryDTO, CreateStoryResponse } from "../interfaces/story.interface";
import api from "./api";

const StoryService = {
  createStory: async (params: CreateStoryDTO) => {
    return await api.post<CreateStoryResponse>("/story", params);
  },
};

export default StoryService;
