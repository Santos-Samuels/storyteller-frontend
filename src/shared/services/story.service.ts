import { mockedStory } from "@/pages/ReadStoryScreen/mock";
import { AxiosResponse } from "axios";
import { GenerateStoryDTO, IStory } from "../interfaces/story.entity";
import api from "./api";

const StoryService = {
  // generate: async (params: GenerateStoryDTO) => {
  //   return api.post<IStory>("/story/generate", params);
  // },
  // create: async (story: IStory) => {
  //   return api.post<IStory>("/story", story);
  // },
  // getById: async (id: IStory["id"]) => {
  //   return api.get<IStory>(`/story/${id}`);
  // },
  // getAll: async () => {
  //   return api.get<IStory[]>("/story");
  // },
  // delete: async (id: IStory["id"]) => {
  //   return api.delete<void>(`/story/${id}`);
  // },
  generate: async (params: GenerateStoryDTO) => {
    return new Promise<AxiosResponse<IStory>>((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockedStory,
          status: 200,
        } as AxiosResponse<IStory>);
      }, 1000);
    });
  },
  create: async (story: IStory) => {
    return new Promise<AxiosResponse<IStory>>((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockedStory,
          status: 200,
        } as AxiosResponse<IStory>);
      }, 1000);
    });
  },
  getById: async (id: IStory["id"]) => {
    return new Promise<AxiosResponse<IStory>>((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockedStory,
          status: 200,
        } as AxiosResponse<IStory>);
      }, 1000);
    });
  },
  getAll: async () => {
    return new Promise<AxiosResponse<IStory[]>>((resolve) => {
      setTimeout(() => {
        resolve({
          data: [mockedStory],
          status: 200,
        } as AxiosResponse<IStory[]>);
      }, 1000);
    });
  },
  delete: async (id: IStory["id"]) => {
    return api.delete<void>(`/story/${id}`);
  },
};

export default StoryService;
