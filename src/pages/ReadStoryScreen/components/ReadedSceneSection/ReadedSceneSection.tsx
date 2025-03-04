import { Button, Modal } from "@/components";
import { ICharacter } from "@/shared/interfaces/character.entity";
import { ISceneCharacter } from "@/shared/interfaces/scene-character.entity";
import { FC, useState } from "react";
import SceneCharacterList from "../SceneCharacterList/SceneCharacterList";
import * as S from "./styles";

interface ReadedSceneSectionProps {
  readedScenes: ISceneCharacter[];
  characters: ICharacter[];
}

const ReadedSceneSection: FC<ReadedSceneSectionProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <S.ButtonWrapper>
        <Button
          type="neutral"
          size="sm"
          onClick={toggleModal}
          label="Histórico"
          disabled={!props.readedScenes.length}
        />
      </S.ButtonWrapper>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <S.Container>
          <S.HeaderCntainer>
            <Button
              type="neutral"
              size="sm"
              onClick={toggleModal}
              label="Fechar"
            />
          </S.HeaderCntainer>

          <S.ListContainer>
            <SceneCharacterList
              scenes={props.readedScenes}
              characters={props.characters}
              showChosenOption
            />
          </S.ListContainer>
        </S.Container>
      </Modal>
    </div>
  );
};

export default ReadedSceneSection;
