import { PageContainer } from "@/components";
import StoryService from "@/shared/services/story.service";
import { useQuery } from "@tanstack/react-query";
import StoryList from "./components/StoryList/StoryList";

const StoryListScreen = () => {
  const { data } = useQuery({
    queryKey: ["getStories"],
    queryFn: StoryService.getAll,
  });

  return (
    <PageContainer
      title="Suas histórias"
      subtitle="Lista com suas histórias criadas, prontas pra compartilhar."
    >
      <StoryList stories={data?.data} />
    </PageContainer>
  );
};

export default StoryListScreen;
