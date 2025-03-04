import { ICharacter } from "@/shared/interfaces/character.entity";
import { ISceneCharacter } from "@/shared/interfaces/scene-character.entity";
import { IUserInteractionOption } from "@/shared/interfaces/user-interaction-option.entity";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import SceneCharacterItem from "../SceneCharacterItem/SceneCharacterItem";

interface SceneCharacterListProps {
  scenes: ISceneCharacter[];
  characters: ICharacter[];
  onPressBalloon: (
    currentSceneId: ISceneCharacter["id"],
    chosenOptionId?: IUserInteractionOption["id"]
  ) => void;
}

const SceneControl: FC<SceneCharacterListProps> = (props) => {
  const [activeScene, setActiveScene] = useState<ISceneCharacter>();
  const [scenesToSkip, setScenesToSkip] = useState<ISceneCharacter["id"][]>([]);

  const nextScene = useMemo(() => {
    if (!activeScene) return;
    const activeSceneIndex = props.scenes.findIndex(
      (item) => item.id === activeScene.id
    );

    if (activeSceneIndex === -1) return;

    for (let i = activeSceneIndex + 1; i < props.scenes.length; i++) {
      const nextSceneCandidate = props.scenes[i];
      if (!scenesToSkip.includes(nextSceneCandidate.id))
        return nextSceneCandidate;
    }

    return props.scenes[activeSceneIndex + 1];
  }, [activeScene, props.scenes]);

  const storeSceneToSkip = (selectedOption: IUserInteractionOption) => {
    if (!nextScene) return;

    const scenesSkip: ISceneCharacter["id"][] = [];

    activeScene?.interaction?.options.forEach((option) => {
      if (option.id === selectedOption.id) return;
      scenesSkip.push(option.nextSceneCharacterId);
    });

    setScenesToSkip(scenesSkip);
  };

  const handleOnPressBalloon = (
    currentSceneId: ISceneCharacter["id"],
    selectedOption?: IUserInteractionOption
  ) => {
    if (!nextScene) return;

    if (!selectedOption) {
      props.onPressBalloon(currentSceneId);
      setActiveScene(nextScene);
      return;
    }

    const nextSceneItem = props.scenes.find(
      (item) => item.id === selectedOption.nextSceneCharacterId
    );
    if (!nextSceneItem) return;
    storeSceneToSkip(selectedOption);
    props.onPressBalloon(currentSceneId, selectedOption.id);
    setActiveScene(nextSceneItem);
  };

  const handleInitialActiveScene = useCallback(() => {
    const initialScene = props.scenes[0];
    if (!initialScene) return;
    setActiveScene(initialScene);
  }, [props.scenes]);

  useEffect(() => {
    handleInitialActiveScene();
  }, [handleInitialActiveScene]);

  if (!activeScene) return;

  return (
    <SceneCharacterItem
      activeItem={activeScene}
      characters={props.characters}
      handleClick={handleOnPressBalloon}
      avatarImageHeight={300}
      responsiveAvatarPosition
      typeAnimation
    />
  );
};

export default SceneControl;
