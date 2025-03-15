import { Typography } from "@/components";
import { IStory } from "@/shared/interfaces/story.entity";
import { Card } from "antd";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import StoryItemActions from "../StoryItemActions/StoryItemActions";
import * as S from "./styles";

interface StoryItemProps {
  story: IStory;
  onRefetch: () => void;
}

const StoryItem: FC<StoryItemProps> = (props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/story/${props.story.id}/read`);
  };

  return (
    <S.CardContainer>
      <Card
        title={props.story.title}
        variant="borderless"
        extra={<StoryItemActions storyId={props.story.id} onRefetch={props.onRefetch} />}
      >
        <div onClick={handleNavigate}>
          <Typography variant="body3" children={props.story.summary} />
          <S.StyledTypography
            variant="label1"
            children={
              "Criado em " +
              format(new Date(props.story.createdAt), "PP", {
                locale: ptBR,
              })
            }
          />
        </div>
      </Card>
    </S.CardContainer>
  );
};

export default StoryItem;
