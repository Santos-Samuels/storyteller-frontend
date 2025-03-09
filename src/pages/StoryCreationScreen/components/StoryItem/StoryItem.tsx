import { CharacterImage, Typography } from "@/components";
import { CharacterGenderEnum } from "@/shared/interfaces/character.entity";
import { IStory } from "@/shared/interfaces/story.entity";
import { Button, Modal } from "antd";
import { FC } from "react";
import * as S from "./styles";

interface StoryItemProps {
  story: IStory;
  onOpenPreview: () => void;
  onOpenAppearanceForm: () => void;
  onSave: () => Promise<void>;
  onDiscart: () => void;
}

const StoryItem: FC<StoryItemProps> = (props) => {
  const getGenderLabel = (gender: CharacterGenderEnum) => {
    switch (gender) {
      case CharacterGenderEnum.MALE:
        return "Masculino";
      case CharacterGenderEnum.FEMALE:
        return "Feminino";
      default:
        return "";
    }
  };

  const onDiscart = () => {
    Modal.confirm({
      title: "Tem certeza que deseja descartar a história?",
      content:
        "Ao descartar a história, você perderá permanentemente as alterações feitas.",
      okText: "Descartar",
      cancelText: "Cancelar",
      onOk() {
        return props.onDiscart();
      },
    });
  };

  return (
    <S.StoryItemContainer>
      <S.HeaderContainer>
        <Typography variant="h3" children={props.story.title} />
        <S.StyledDiscartIcon title="Descartar" onClick={onDiscart} />
      </S.HeaderContainer>

      <S.SecundaryText variant="body1" children={props.story.summary} />

      {props.story.readyToPreview ? (
        <S.CharactersContainer>
          {props.story.characters?.map((character) => (
            <S.CharacterItem key={character.id}>
              <CharacterImage
                key={character.id}
                path={character.avatarUrl}
                height={100}
              />

              <div>
                <S.CharacterName variant="body1" children={character.name} />
                <S.SecundaryText
                  variant="label1"
                  children={getGenderLabel(character.gender)}
                />
              </div>
            </S.CharacterItem>
          ))}

          <div>
            <S.StyledImage
              width={200}
              src={props.story.backgroundUrl}
              alt="background"
            />
            <S.CharacterName variant="body1" children="Imagem de fundo" />
          </div>
        </S.CharactersContainer>
      ) : (
        <S.ActionActionsContainer>
          <Button type="link" onClick={props.onOpenAppearanceForm}>
            <S.StyledAlertIcon />
            Clique para escolher a aparência
          </Button>
        </S.ActionActionsContainer>
      )}

      <S.ActionActionsContainer>
        {props.story.readyToPreview && (
          <Button
            type="link"
            disabled={!props.story.readyToPreview}
            onClick={props.onOpenAppearanceForm}
          >
            Editar
          </Button>
        )}
        <Button
          type="default"
          disabled={!props.story.readyToPreview}
          onClick={props.onOpenPreview}
        >
          Prévia da História
        </Button>
        <Button
          type="primary"
          disabled={!props.story.readyToPreview}
          onClick={props.onSave}
        >
          Salvar
        </Button>
      </S.ActionActionsContainer>
    </S.StoryItemContainer>
  );
};

export default StoryItem;
