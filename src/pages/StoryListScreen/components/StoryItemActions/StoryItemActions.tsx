import { IStory } from "@/shared/interfaces/story.entity";
import StoryService from "@/shared/services/story.service";
import { useMutation } from "@tanstack/react-query";
import { Button } from "antd";
import { FC } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";

interface StoryItemActionsProps {
  storyId: IStory["id"];
  onRefetch: () => void;
}

const StoryItemActions: FC<StoryItemActionsProps> = (props) => {
  const mutation = useMutation({
    mutationKey: ["deleteStory", props.storyId],
    mutationFn: StoryService.delete,
    onSuccess: () => {
      toast.success("História removida com sucesso");
      props.onRefetch();
    },
    onError: () => {
      toast.error("Erro ao remover história");
    },
  });

  const handleDelete = () => {
    if (mutation.isPending) return;
    mutation.mutate(props.storyId);
  };

  const handleShare = () => {
    // copy to clipboard
    navigator.clipboard.writeText(
      `${window.location.origin}/story/${props.storyId}/read/shared`
    );

    toast.success("O link da história foi copiado");
  };

  return (
    <S.Container>
      <Button
        type="link"
        disabled={mutation.isPending}
        loading={mutation.isPending}
      >
        <S.StyledDeleteIcon title="Remover" onClick={handleDelete} />
      </Button>
      <S.StyledShareIcon title="Compartilhar" onClick={handleShare} />
    </S.Container>
  );
};

export default StoryItemActions;
