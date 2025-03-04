import { IStory } from "@/shared/interfaces/story.entity";
import { Col, Empty, Row } from "antd";
import { FC } from "react";
import StoryItem from "../StoryItem/StoryItem";

interface StoryListProps {
  stories?: IStory[];
}

const StoryList: FC<StoryListProps> = (props) => {
  if (!props.stories?.length)
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Nenhuma história foi encontrada."
      />
    );

  return (
    <Row gutter={[16, 16]} justify="center">
      {props.stories.map((item) => (
        <Col span={24} md={12} lg={8}>
          <StoryItem story={item} />
        </Col>
      ))}
    </Row>
  );
};

export default StoryList;
