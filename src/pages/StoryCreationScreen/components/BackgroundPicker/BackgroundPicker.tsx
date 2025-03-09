import { CharacterImage, PageTitle, Typography } from "@/components";
import { Button, Input } from "antd";
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
        <Typography variant="label2">
          <S.StyledCheckIcon />
          Escolha uma imagem com link válido
        </Typography>

        <Typography variant="label2">
          <S.StyledCheckIcon />
          Evite imagens com muitos detalhes
        </Typography>

        <Typography variant="label2">
          <S.StyledCheckIcon />
          Escolha uma imagem que realce os personagens
        </Typography>

        <Typography variant="label2">
          <S.StyledCheckIcon />
          Evite url que termine com a extensão da imagem como .png ou .jpg
        </Typography>

        <Button type="link" href="https://www.freepik.com/" target="_blank">
          Recomendação de site de imagens gratuitas:
        </Button>
      </S.InstructionsContainer>

      <S.InputContainer>
        <Input
          placeholder="Link da imagem"
          value={props.bgUrl}
          type="url"
          onChange={(e) => props.onChangeBgUrl(e.target.value)}
        />

        {props.bgUrl && (
          <div>
            <S.StyledTypography variant="h4" children="Preview" />

            <S.BgPreviewContainer $bgUrl={props.bgUrl}>
              {Object.values(props.pickedCharacters).map((character) => (
                <div key={character.id}>
                  <CharacterImage
                    key={character.id}
                    path={character.avatarUrl}
                    height={130}
                  />
                </div>
              ))}
            </S.BgPreviewContainer>
          </div>
        )}
      </S.InputContainer>
    </div>
  );
};

export default BackgroundPicker;
