import { AppContext } from "@/context/AppContext";
import { GPTStoryScene } from "@/shared/interfaces/story.interface";
import { FC, useContext } from "react";

interface SceneCardProps {
  scene: GPTStoryScene;
  index: number;
}

const SceneCard: FC<SceneCardProps> = ({ scene, index }) => {
  const { currentTheme, isMainStory } = useContext(AppContext);

  const getFakeCaracterName = (index: number) => {
    if (index % 2 === 0) return "João";
    return "Maria";
  };

  return (
    <>
      <p className={`character-name text-${scene.position}`}>
        {getFakeCaracterName(index)}
      </p>
      <div className={`speech text-${scene.position}`}>{scene.speech}</div>
      {!isMainStory && <span className="tag tag-active">{currentTheme}</span>}
    </>
  );
};

export default SceneCard;
