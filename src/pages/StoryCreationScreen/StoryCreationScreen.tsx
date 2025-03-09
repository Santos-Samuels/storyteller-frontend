import { PageContainer } from "@/components";
import { ICharacter } from "@/shared/interfaces/character.entity";
import { GenerateStoryDTO, IStory } from "@/shared/interfaces/story.entity";
import StoryService from "@/shared/services/story.service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import AppearanceForm from "./components/AppearanceForm/AppearanceForm";
import StoryForm from "./components/StoryForm/StoryForm";
import StoryItem from "./components/StoryItem/StoryItem";
import StoryPreview from "./components/StoryPreview/StoryPreview";

const StoryCreationScreen = () => {
  const [isAppearanceFormOpen, setIsAppearanceFormOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [generatedStory, setGeneratedStory] = useState<IStory>();

  const mutation = useMutation({
    mutationKey: ["generateStory"],
    mutationFn: StoryService.generate,
    onError: () => {
      toast.error("Erro ao gerar a história");
    },
    onSuccess(data) {
      setGeneratedStory(data.data);
    },
  });

  const onSubmit = async (values: GenerateStoryDTO) => {
    mutation.mutate(values);
  };

  const onDiscartStory = () => {
    setGeneratedStory(undefined);
  };

  const onSaveStory = async () => {
    // return new Promise<void>((resolve, reject) => {
    //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
    //   setIsPreviewOpen(false);
    //   toast.success("História salva com sucesso!");
    //   // TODO: redirect to saved story
    // }).catch(() => console.log("Oops errors!"));
    toast.warn("A criação da história ainda não foi implementada!");
  };

  const onSaveAppearanceForm = (characters: ICharacter[], bgUrl: string) => {
    if (!generatedStory) return;
    const storyCopy = { ...generatedStory };
    storyCopy.characters = characters;
    storyCopy.backgroundUrl = bgUrl;
    storyCopy.readyToPreview = true;

    storyCopy.sceneCharacters = storyCopy.sceneCharacters?.map(
      (sceneCharacter) => {
        const character = characters.find(
          (character) => character.id === sceneCharacter.characterId
        );

        if (!character) return sceneCharacter;

        return {
          ...sceneCharacter,
          avatarUrl: character.avatarUrl,
        };
      }
    );

    setGeneratedStory(storyCopy);
    setIsAppearanceFormOpen(false);
    toast.success("A aparência foi salva com sucesso!");
  };

  return (
    <PageContainer
      title="Storyteller"
      subtitle="Escolha um tema e um tamanho pra criar sua história!"
    >
      <StoryForm onSubmit={onSubmit} isLoading={mutation.isPending} />

      {generatedStory && (
        <StoryItem
          story={generatedStory}
          onDiscart={onDiscartStory}
          onOpenAppearanceForm={() => setIsAppearanceFormOpen(true)}
          onOpenPreview={() => setIsPreviewOpen(true)}
          onSave={onSaveStory}
          // TODO: add loading on save button
        />
      )}

      <AppearanceForm
        characters={generatedStory?.characters || []}
        onClose={() => setIsAppearanceFormOpen(false)}
        onSave={onSaveAppearanceForm}
        isOpen={isAppearanceFormOpen}
        story={generatedStory}
      />

      <StoryPreview
        story={generatedStory}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </PageContainer>
  );
};

export default StoryCreationScreen;
