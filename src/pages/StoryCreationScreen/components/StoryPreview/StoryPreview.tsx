import StoryRender from "@/pages/ReadStoryScreen/components/StoryRender/StoryRender";
import { IStory } from "@/shared/interfaces/story.entity";
import { Modal } from "antd";
import { FC } from "react";

interface StoryPreviewProps {
  story?: IStory;
  isOpen: boolean;
  onClose: () => void;
}

const StoryPreview: FC<StoryPreviewProps> = (props) => {
  if (!props.story) return;

  return (
    <Modal
      title="Prévia da História"
      open={props.isOpen}
      onClose={props.onClose}
      onCancel={props.onClose}
      footer={null}
      centered
      width={"80%"}
    >
      <StoryRender story={props.story} />
    </Modal>
  );
};

export default StoryPreview;
