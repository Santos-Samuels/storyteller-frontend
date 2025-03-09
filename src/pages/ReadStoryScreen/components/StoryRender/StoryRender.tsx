import PageTitle from "@/components/PageTitle/PageTitle";
import { ISceneCharacter } from "@/shared/interfaces/scene-character.entity";
import { IStory } from "@/shared/interfaces/story.entity";
import { IUserInteractionOption } from "@/shared/interfaces/user-interaction-option.entity";
import { FC, useMemo, useState } from "react";
import ReadedSceneSection from "../ReadedSceneSection/ReadedSceneSection";
import SceneControl from "../SceneControl/SceneControl";
import * as S from "./styles";

interface IStoryRenderProps {
  story?: IStory;
  showTitle?: boolean;
}

const StoryRender: FC<IStoryRenderProps> = (props) => {
  const [readedScenes, setReadedScenes] = useState<ISceneCharacter[]>([]);

  const scenes: ISceneCharacter[] = useMemo(() => {
    if (!props.story) return [];
    const items = props.story?.sceneCharacters || [];

    return [
      { id: "intro", speech: props.story?.intro } as ISceneCharacter,
      ...items,
    ];
  }, [props.story?.sceneCharacters, props.story?.intro]);

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

  if (!props.story?.characters || !props.story?.sceneCharacters) return;

  return (
    <>
      {props.showTitle && <PageTitle title={props.story?.title} />}

      <S.Container $bgUrl={props.story?.backgroundUrl}>
        <ReadedSceneSection
          readedScenes={readedScenes}
          characters={props.story?.characters}
        />

        <SceneControl
          scenes={scenes}
          characters={props.story?.characters}
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
