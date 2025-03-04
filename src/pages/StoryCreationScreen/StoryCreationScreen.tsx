import { PageContainer } from "@/components";
import { GenerateStoryDTO } from "@/shared/interfaces/story.entity";
import StoryService from "@/shared/services/story.service";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StoryForm from "./components/StoryForm/StoryForm";
import StoryPreview from "./components/StoryPreview/StoryPreview";

const StoryCreationScreen = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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

  const onSave = async () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      setIsPreviewOpen(false);
      toast.success("História salva com sucesso!");
      // TODO: redirect to saved story
    }).catch(() => console.log("Oops errors!"));
  };

  const onClose = () => {
    setIsPreviewOpen(false);
    toast.warn("A história foi descartada");
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
        story={mutation.data?.data}
        isOpen={isPreviewOpen}
        onClose={onClose}
        onSave={onSave}
      />
    </PageContainer>
  );
};

export default StoryCreationScreen;
