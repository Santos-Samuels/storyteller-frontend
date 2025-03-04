import { PageContainer } from "@/components";
import { GenerateStoryDTO } from "@/shared/interfaces/story.entity";
import StoryService from "@/shared/services/story.service";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { mockedStory } from "../ReadStoryScreen/mock";
import StoryForm from "./components/StoryForm/StoryForm";
import StoryPreview from "./components/StoryPreview/StoryPreview";

const HomeScreen = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // TODO: feecback when error
  const mutation = useMutation({
    mutationKey: ["generateStory"],
    mutationFn: StoryService.generate,
    onError: () => {
      toast.error("Erro ao gerar a história");
    },
  });

  const onSubmit = async (values: GenerateStoryDTO) => {
    mutation.mutate(values);
  };

  const onClose = () => {
    setIsPreviewOpen(false);
  };

  useEffect(() => {
    if (!mutation.isSuccess) return;
    setIsPreviewOpen(true);
  }, [mutation.isSuccess]);

  return (
    <PageContainer
      title="Storyteller"
      subtitle="Escolha um tema e um tamanho pra criar sua história!"
    >
      <StoryForm onSubmit={onSubmit} isLoading={mutation.isPending} />

      <StoryPreview
        // story={mutation.data?.data}
        story={mockedStory}
        isOpen={isPreviewOpen}
        onClose={onClose}
        onSave={() =>
          new Promise<void>((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log("Oops errors!"))
        }
      />
    </PageContainer>
  );
};

export default HomeScreen;
