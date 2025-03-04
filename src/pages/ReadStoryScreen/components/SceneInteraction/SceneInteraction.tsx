import { Button } from "@/components";
import { CharacterPositionEnum } from "@/shared/interfaces/character.entity";
import { IUserInteractionOption } from "@/shared/interfaces/user-interaction-option.entity";
import { IUserInteraction } from "@/shared/interfaces/user-interaction.entity";
import { FC } from "react";
import * as S from "./styles";

interface SceneInteractionProps {
  interaction: IUserInteraction;
  onChooseOption: (option: IUserInteractionOption) => void;
  direction: CharacterPositionEnum;
}

const SceneInteraction: FC<SceneInteractionProps> = (props) => {
  return (
    <S.Container direction={props.direction}>
      <S.StyledTypography variant="h4" children={props.interaction.sentence} />

      <S.OptionsContainer>
        {props.interaction.options.map((option) => (
          <Button
            key={option.id}
            size="sm"
            type="secondary"
            label={option.label}
            onClick={() => props.onChooseOption(option)}
          />
        ))}
      </S.OptionsContainer>
    </S.Container>
  );
};

export default SceneInteraction;
