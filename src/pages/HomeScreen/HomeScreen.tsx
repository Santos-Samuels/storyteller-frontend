import { ISceneCharacter } from "@/shared/interfaces/scene-character.entity";
import { IUserInteractionOption } from "@/shared/interfaces/user-interaction-option.entity";
import { useMemo, useState } from "react";
import ReadedSceneSection from "./components/ReadedSceneSection/ReadedSceneSection";
import SceneControl from "./components/SceneControl/SceneControl";
import { mockedStory } from "./mock";
import * as S from "./styles";

const HomeScreen = () => {
  const [readedScenes, setReadedScenes] = useState<ISceneCharacter[]>([]);

  const scenes: ISceneCharacter[] = useMemo(() => {
    const items = mockedStory.sceneCharacters || [];

    return [
      { id: "intro", speech: mockedStory.intro } as ISceneCharacter,
      ...items,
    ];
  }, [mockedStory.sceneCharacters, mockedStory.intro]);

  const handleClickItem = (
    currentSceneId: ISceneCharacter["id"],
    chosenOptionId?: IUserInteractionOption["id"]
  ) => {
    const scene = scenes.find(
      (item) => item.id === currentSceneId
    );
    if (!scene) return;

    if (chosenOptionId && scene.interaction) {
      const chosenOptionIndex = scene.interaction.options.findIndex(
        (option) => option.id === chosenOptionId
      );

      if (chosenOptionIndex === undefined) return;

      scene.interaction.options[chosenOptionIndex].hasBeenChosen = true;
    }

    setReadedScenes((prev) => [...prev, scene]);
  };

  // useEffect(() => {
  //   if (!scenes.length || readedScenes.length > 0) return;

  //   const firstScene = scenes[0];
  //   setReadedScenes([firstScene]);
  // }, [readedScenes, scenes]);

  if (!mockedStory.characters || !mockedStory.sceneCharacters) return;

  return (
    <>
      <S.Container>
        <ReadedSceneSection
          readedScenes={readedScenes}
          characters={mockedStory.characters}
        />

        <SceneControl
          scenes={scenes}
          characters={mockedStory.characters}
          onPressBalloon={handleClickItem}
        />
      </S.Container>

      {readedScenes.length <= 3 && <S.StyledTypography
        variant="label3"
        children="Toque no balão para avançar"
      />}
    </>
  );
};

export default HomeScreen;
