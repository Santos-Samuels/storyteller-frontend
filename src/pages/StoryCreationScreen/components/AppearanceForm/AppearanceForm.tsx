import {
  CharacterPositionEnum,
  ICharacter,
} from "@/shared/interfaces/character.entity";
import { IStory } from "@/shared/interfaces/story.entity";
import { Button, Modal } from "antd";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import BackgroundPicker from "../BackgroundPicker/BackgroundPicker";
import CharactersPicker from "../CharactersPicker/CharactersPicker";
import * as S from "./styles";

interface AppearanceFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (characters: ICharacter[], bgUrl: string) => void;
  characters?: ICharacter[];
  story?: IStory;
}

export interface PickedCharacterState {
  [CharacterPositionEnum.LEFT]?: ICharacter;
  [CharacterPositionEnum.RIGHT]?: ICharacter;
  [CharacterPositionEnum.CENTER]?: ICharacter;
}

const AppearanceForm: FC<AppearanceFormProps> = (props) => {
  const [pickedCharacters, setPickedCharacters] =
    useState<PickedCharacterState>({});
  const [backgroundUrl, setBackgroundUrl] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const disabledChoosenOptions: string[] = useMemo(() => {
    const values: ICharacter[] = Object.values(pickedCharacters);
    return values.map((character) => character.avatarUrl);
  }, [pickedCharacters]);

  const onPickCharacter = useCallback(
    (character: ICharacter, choosenPath: string) => {
      if (disabledChoosenOptions.includes(choosenPath)) return;

      setPickedCharacters((prev) => ({
        ...prev,
        [character.position]: {
          ...character,
          avatarUrl: choosenPath,
        },
      }));
    },
    [disabledChoosenOptions]
  );

  const formSteps = useMemo(
    () => [
      {
        index: 0,
        disabled:
          Object.keys(pickedCharacters).length < props.characters!.length,
        component: (
          <CharactersPicker
            characters={props.characters || []}
            pickedCharacters={pickedCharacters}
            disabledChoosenOptions={disabledChoosenOptions}
            onPickCharacter={onPickCharacter}
          />
        ),
      },
      {
        index: 1,
        disabled: !backgroundUrl,
        component: (
          <BackgroundPicker
            pickedCharacters={pickedCharacters}
            bgUrl={backgroundUrl}
            onChangeBgUrl={setBackgroundUrl}
          />
        ),
      },
    ],
    [
      props.characters,
      pickedCharacters,
      disabledChoosenOptions,
      onPickCharacter,
      backgroundUrl,
    ]
  );

  const clearForm = () => {
    setPickedCharacters({});
    setBackgroundUrl("");
    setCurrentStep(0);
  };

  const onClose = () => {
    props.onClose();
    clearForm();
  };

  const onSave = () => {
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(:\d+)?(\/[^\s]*)?$/;

    if (!urlRegex.test(backgroundUrl)) {
      toast.error("Link inválido");
      return;
    }

    props.onSave(Object.values(pickedCharacters), backgroundUrl);
    clearForm();
  };

  const onNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const onBack = () => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  };

  const setInitialForm = () => {
    const initialPickedCharacters: PickedCharacterState = {};
    props.story?.characters?.forEach((character) => {
      initialPickedCharacters[character.position] = character;
    });

    setPickedCharacters(initialPickedCharacters);
    setBackgroundUrl(props.story?.backgroundUrl || "");
  };

  useEffect(() => {
    clearForm();
    if (!props.story?.readyToPreview) return;
    setInitialForm();
  }, [props.story]);

  return (
    <Modal
      open={props.isOpen}
      onClose={onClose}
      onCancel={onClose}
      footer={
        <S.ActionsContainer>
          <Button type="default" onClick={onBack} disabled={currentStep === 0}>
            Voltar
          </Button>

          {currentStep !== formSteps.length - 1 && (
            <Button
              type="primary"
              onClick={onNext}
              disabled={formSteps[currentStep].disabled}
            >
              Próximo
            </Button>
          )}

          {currentStep === formSteps.length - 1 && (
            <Button
              type="primary"
              onClick={onSave}
              disabled={formSteps[currentStep].disabled}
            >
              Salvar
            </Button>
          )}
        </S.ActionsContainer>
      }
      centered
      width={"80%"}
    >
      {formSteps[currentStep].component}
    </Modal>
  );
};

export default AppearanceForm;
