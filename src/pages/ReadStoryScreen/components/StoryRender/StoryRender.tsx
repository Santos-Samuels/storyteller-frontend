import PageTitle from "@/components/PageTitle/PageTitle";
import { ISceneCharacter } from "@/shared/interfaces/scene-character.entity";
import { IStory } from "@/shared/interfaces/story.entity";
import { IUserInteractionOption } from "@/shared/interfaces/user-interaction-option.entity";
import { FC, useMemo, useState } from "react";
import { mockedStory } from "../../mock";
import ReadedSceneSection from "../ReadedSceneSection/ReadedSceneSection";
import SceneControl from "../SceneControl/SceneControl";
import * as S from "./styles";

interface IStoryRenderProps {
  story: IStory;
  showTitle?: boolean;
}

const StoryRender: FC<IStoryRenderProps> = (props) => {
  const [readedScenes, setReadedScenes] = useState<ISceneCharacter[]>([]);

  const scenes: ISceneCharacter[] = useMemo(() => {
    const items = props.story.sceneCharacters || [];

    return [
      { id: "intro", speech: mockedStory.intro } as ISceneCharacter,
      ...items,
    ];
  }, [mockedStory.sceneCharacters, mockedStory.intro]);

  const handleClickItem = (
    currentSceneId: ISceneCharacter["id"],
    chosenOptionId?: IUserInteractionOption["id"]
  ) => {
    const scene = scenes.find((item) => item.id === currentSceneId);
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
      {props.showTitle && <PageTitle title={mockedStory.title} />}

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
      {readedScenes.length <= 3 && (
        <S.StyledTypography
          variant="label3"
          children="Toque no balão para avançar"
        />
      )}
    </>
  );
};

export default StoryRender;
