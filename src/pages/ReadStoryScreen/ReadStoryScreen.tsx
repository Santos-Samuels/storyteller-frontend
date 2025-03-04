import { PageContainer } from "@/components";
import StoryService from "@/shared/services/story.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import StoryRender from "./components/StoryRender/StoryRender";

const ReadStoryScreen = () => {
  const { id } = useParams();

  if (!id) return;

  const { data, isLoading } = useQuery({
    queryKey: ["getStory", id],
    queryFn: () => StoryService.getById(id),
  });

  return (
    <PageContainer isLoading={isLoading} title={data?.data.title}>
      <StoryRender story={data?.data} />
    </PageContainer>
  );
};

export default ReadStoryScreen;
