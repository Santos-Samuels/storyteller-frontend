import { CharacterImage } from "@/components";
import {
  CharacterPositionEnum,
  ICharacter,
} from "@/shared/interfaces/character.entity";
import { ISceneCharacter } from "@/shared/interfaces/scene-character.entity";
import { IUserInteractionOption } from "@/shared/interfaces/user-interaction-option.entity";
import { FC, useMemo, useState } from "react";
import SceneInteraction from "../SceneInteraction/SceneInteraction";
import SpeechBalloonItem from "../SpeechBalloon/SpeechBalloon";
import * as S from "./styles";

interface SceneCharacterItemProps {
  activeItem: ISceneCharacter;
  characters: ICharacter[];
  avatarImageHeight?: number;
  responsiveAvatarPosition?: boolean;
  handleClick: (
    currentSceneId: ISceneCharacter["id"],
    selectedOption?: IUserInteractionOption
  ) => void;
  typeAnimation?: boolean;
}

const SceneCharacterItem: FC<SceneCharacterItemProps> = (props) => {
  const [isInteractionVisible, setIsInteractionVisible] = useState(false);

  const handleButtonClick = () => {
    if (!props.activeItem.interaction) {
      props.handleClick(props.activeItem.id);
      return;
    }

    setIsInteractionVisible(true);
  };

  const handleOnChooseOption = (option: IUserInteractionOption) => {
    props.handleClick(props.activeItem.id, option);
  };

  const character = useMemo(
    () =>
      props.characters.find((item) => item.id === props.activeItem.characterId),
    [props.characters, props.activeItem.characterId]
  );

  return (
    <S.Wrapper>
      {props.activeItem.interaction && isInteractionVisible && (
        <SceneInteraction
          direction={CharacterPositionEnum.LEFT}
          interaction={props.activeItem.interaction}
          onChooseOption={handleOnChooseOption}
        />
      )}

      <S.Container
        $position={
          props.responsiveAvatarPosition ? character?.position : undefined
        }
      >
        {character?.position === CharacterPositionEnum.LEFT && (
          <CharacterImage
            height={props.avatarImageHeight}
            path={props.activeItem.avatarUrl}
          />
        )}

        <SpeechBalloonItem
          key={props.activeItem.id}
          characterName={character?.name}
          speech={props.activeItem.speech}
          textAlign={character?.position}
          onClick={handleButtonClick}
          typeAnimation={props.typeAnimation}
        />

        {character?.position === CharacterPositionEnum.RIGHT && (
          <CharacterImage
            height={props.avatarImageHeight}
            path={props.activeItem.avatarUrl}
          />
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default SceneCharacterItem;
