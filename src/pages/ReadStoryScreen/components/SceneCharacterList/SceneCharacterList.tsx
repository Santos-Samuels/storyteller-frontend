import { ICharacter } from "@/shared/interfaces/character.entity";
import { ISceneCharacter } from "@/shared/interfaces/scene-character.entity";
import { FC } from "react";
import ChosenOptionItem from "../ChosenOptionItem/ChosenOptionItem";
import SceneCharacterItem from "../SceneCharacterItem/SceneCharacterItem";
import * as S from "./styles";

interface SceneCharacterListProps {
  scenes: ISceneCharacter[];
  characters: ICharacter[];
  showChosenOption?: boolean;
}

const SceneCharacterList: FC<SceneCharacterListProps> = (props) => {
  const handleClickItem = (_currentSceneId: ISceneCharacter["id"]) => {
    return;
  };

  return (
    <S.Container>
      {props.scenes.map((scene) => (
        <>
          <SceneCharacterItem
            key={scene.id}
            activeItem={scene}
            characters={props.characters}
            handleClick={handleClickItem}
            avatarImageHeight={100}
          />

          {props.showChosenOption && scene?.interaction && (
            <ChosenOptionItem options={scene.interaction.options} />
          )}
        </>
      ))}
    </S.Container>
  );
};

export default SceneCharacterList;
