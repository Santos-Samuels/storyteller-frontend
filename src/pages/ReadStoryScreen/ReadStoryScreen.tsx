import { PageContainer } from "@/components";
import StoryService from "@/shared/services/story.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import StoryRender from "./components/StoryRender/StoryRender";
import { mockedStory } from "./mock";

const ReadStoryScreen = () => {
  const { id } = useParams();

  if (!id) return;

  const {} = useQuery({
    queryKey: ["getStory", id],
    queryFn: () => StoryService.getById(id),
  });

  return (
    <PageContainer title={mockedStory.title}>
      <StoryRender story={mockedStory} />
    </PageContainer>
  );
};

export default ReadStoryScreen;
