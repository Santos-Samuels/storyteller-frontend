import StoryRender from "@/pages/ReadStoryScreen/components/StoryRender/StoryRender";
import { IStory } from "@/shared/interfaces/story.entity";
import { Modal } from "antd";
import { FC } from "react";

interface StoryPreviewProps {
  story?: IStory;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => Promise<void>;
}

const StoryPreview: FC<StoryPreviewProps> = (props) => {
  if (!props.story) return;

  const onCloseDialog = () => {
    Modal.confirm({
      title: "O que deseja fazer com a história gerada?",
      content:
        "Você pode descartar a história ou salvá-la para ler e compartilhar depois.",
      okText: "Salvar",
      cancelText: "Descartar",
      onOk() {
        return props.onSave();
      },
      onCancel() {
        props.onClose();
      },
      onClose() {
        props.onClose();
      },
    });
  };

  const onClose = () => {
    onCloseDialog();
  };

  return (
    <Modal
      title="Prévia da História"
      open={props.isOpen}
      onClose={onClose}
      onCancel={onClose}
      footer={null}
      centered
      width={"80%"}
    >
      <StoryRender story={props.story} />
    </Modal>
  );
};

export default StoryPreview;
