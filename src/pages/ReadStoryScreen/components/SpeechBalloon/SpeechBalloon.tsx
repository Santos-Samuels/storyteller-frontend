import {
  CharacterPositionEnum,
  ICharacter,
} from "@/shared/interfaces/character.entity";
import { ISceneCharacter } from "@/shared/interfaces/scene-character.entity";
import { FC, useEffect, useState } from "react";
import * as S from "./styles";

interface SpeechBalloonProps {
  speech: ISceneCharacter["speech"];
  characterName?: ICharacter["name"];
  textAlign?: CharacterPositionEnum;
  children?: React.ReactNode;
  onClick?: () => void;
  typeAnimation?: boolean;
}

const speed = 50;

const SpeechBalloon: FC<SpeechBalloonProps> = ({
  textAlign = CharacterPositionEnum.LEFT,
  typeAnimation = false,
  ...props
}) => {
  const [displayText, setDisplayText] = useState("");

  const typeAnimationEffect = () => {
    if (displayText.length >= props.speech.length) return;

    const timeout = setTimeout(() => {
      setDisplayText(props.speech.slice(0, displayText.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (!typeAnimation) {
      setDisplayText(props.speech);
      return;
    }

    return typeAnimationEffect();
  }, [displayText, props.speech, speed]);

  return (
    <S.Container onClick={props.onClick}>
      {props.characterName && (
        <S.CharacterName
          type="gray"
          label={props.characterName}
          size="md"
          $align={textAlign}
        />
      )}
      <S.StyledTypography
        variant="body1"
        children={displayText}
        $align={textAlign}
      />

      <S.ChildrenContainer>{props.children}</S.ChildrenContainer>
    </S.Container>
  );
};

export default SpeechBalloon;
