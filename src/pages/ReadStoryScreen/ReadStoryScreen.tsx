import { PageContainer } from "@/components";
import StoryService from "@/shared/services/story.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import StoryRender from "./components/StoryRender/StoryRender";

const ReadStoryScreen = () => {
  const { id } = useParams();

  if (!id) return;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getStory", id],
    queryFn: () => StoryService.getById(id),
  });

  useEffect(() => {
    if (!isError) return;
    toast.error("Erro ao carregar a história");
  }, [isError]);

  return (
    <PageContainer
      isLoading={isLoading}
      isError={isError}
      errorMessage="Não encontramos a história que você está procurando!"
      title={data?.data.title}
    >
      <StoryRender story={data?.data} />
    </PageContainer>
  );
};

export default ReadStoryScreen;
