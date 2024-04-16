import { sortRamificationSentence } from "@/shared/utils/sortRamificationSentence";
import { FC } from "react";
import { SceneCard } from "..";

interface InteractiveScenesProps {
  currentTheme: string;
  isInteractiveTime: boolean;
  handleInteractiveAnswer: (value: boolean) => void;
}

const InteractiveScenes: FC<InteractiveScenesProps> = ({
  currentTheme,
  handleInteractiveAnswer,
}) => {
  return (
    <>
      <SceneCard
        scene={{
          position: "left",
          speech: sortRamificationSentence(currentTheme),
          caracterSpriteUrl: "",
        }}
      />

      <div className="row">
        <button
          type="button"
          className="button"
          onClick={() => handleInteractiveAnswer(false)}
        >
          Não
        </button>

        <button
          type="button"
          className="button primary"
          onClick={() => handleInteractiveAnswer(true)}
        >
          Sim
        </button>
      </div>
    </>
  );
};

export default InteractiveScenes;
