import { PageContainer } from "@/components";
import StoryService from "@/shared/services/story.service";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import StoryRender from "./components/StoryRender/StoryRender";

interface ReadStoryScreenProps {
  isShared?: boolean;
}

const ReadStoryScreen: FC<ReadStoryScreenProps> = (props) => {
  const { id } = useParams();

  if (!id) return;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getStory", id],
    queryFn: () => StoryService.getById(id),
  });

  const authorName = useMemo(() => {
    if (!data?.data?.author) return;
    return data.data.author.name;
  }, [data]);

  useEffect(() => {
    if (!isError) return;
    toast.error("Erro ao carregar a história");
  }, [isError]);

  return (
    <PageContainer
      isLoading={isLoading}
      isError={isError}
      errorMessage="Não encontramos a história que você está procurando!"
      subtitle={
        props.isShared
          ? `${authorName} compartilhou essa história com você!`
          : undefined
      }
      title={data?.data.title}
      showNavbar={!props.isShared}
    >
      <StoryRender story={data?.data} />
    </PageContainer>
  );
};

export default ReadStoryScreen;
