import { PageTitle, Typography } from "@/components";
import { Input } from "antd";
import { FC } from "react";
import { PickedCharacterState } from "../AppearanceForm/AppearanceForm";
import * as S from "./styles";

interface BackgroundPickerProps {
  pickedCharacters: PickedCharacterState;
  bgUrl: string;
  onChangeBgUrl: (url: string) => void;
}

const BackgroundPicker: FC<BackgroundPickerProps> = (props) => {
  return (
    <div>
      <PageTitle
        title="Escolha a imagem de fundo"
        subtitle="Lembre-se de escolher uma imagem que realce os personagens"
      />

      <S.InstructionsContainer>
        <Typography variant="label1">
          <S.StyledCheckIcon />
          Escolha uma imagem com link válido
        </Typography>

        <Typography variant="label1">
          <S.StyledCheckIcon />
          Evite imagens com muitos detalhes
        </Typography>

        <Typography variant="label1">
          <S.StyledCheckIcon />
          Escolha uma imagem que realce os personagens
        </Typography>
      </S.InstructionsContainer>

      <S.InputContainer>
        <Input
          placeholder="Link da imagem"
          value={props.bgUrl}
          onChange={(e) => props.onChangeBgUrl(e.target.value)}
        />

        {/* <Typography variant="h4" children="Preview" />

        <S.BgPreviewContainer $bgUrl={props.bgUrl}>
          {Object.values(props.pickedCharacters).map((character) => (
            <div key={character.id}>
              <CharacterImage
                key={character.id}
                path={character.avatarUrl}
                height={100}
              />
            </div>
          ))}
          <img src={"https://i.sstatic.net/BIPZz.png"} alt="background" />
        </S.BgPreviewContainer> */}
      </S.InputContainer>
    </div>
  );
};

export default BackgroundPicker;
