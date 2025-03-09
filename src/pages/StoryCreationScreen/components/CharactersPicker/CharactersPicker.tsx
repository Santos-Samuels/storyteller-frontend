import { CharacterImage, PageTitle } from "@/components";
import {
  ICharacter
} from "@/shared/interfaces/character.entity";
import { FC } from "react";
import { PickedCharacterState } from "../AppearanceForm/AppearanceForm";
import * as S from "./styles";
import { charactersOptions } from "./utils";

interface CharactersPickerProps {
  characters: ICharacter[];
  pickedCharacters: PickedCharacterState;
  disabledChoosenOptions: string[];
  onPickCharacter: (character: ICharacter, choosenPath: string) => void;
}

const CharactersPicker: FC<CharactersPickerProps> = (props) => {
  return (
    <div>
      <PageTitle
        title="Escolha a aparência dos personagens"
        subtitle="Clique na imagem para escolher"
      />

      <S.CharactersContainer>
        {props.characters?.map((character) => (
          <div key={character.id}>
            <S.CharacterName variant="h3" children={character.name} />

            <S.CharacterImagesContainer>
              {charactersOptions[character.gender].map((path) => (
                <S.ImageOption
                  $active={
                    props.pickedCharacters[character.position]?.avatarUrl ===
                    path
                  }
                  $disabled={props.disabledChoosenOptions.includes(path)}
                  onClick={() => props.onPickCharacter(character, path)}
                  key={path}
                >
                  <CharacterImage key={character.id} path={path} height={150} />
                </S.ImageOption>
              ))}
            </S.CharacterImagesContainer>
          </div>
        ))}
      </S.CharactersContainer>
    </div>
  );
};

export default CharactersPicker;
