import { AppContext } from "@/context/AppContext";
import { IScene } from "@/shared/interfaces/scene.interface";
import { FC, useContext } from "react";

interface SceneCardProps {
  scene: Pick<IScene, "caracter" | "caracterSpriteUrl" | "speech" | "position">;
}

const SceneCard: FC<SceneCardProps> = ({ scene }) => {
  const { currentTheme, isMainStory } = useContext(AppContext);

  return (
    <div
      className={`scene-card-container ${
        scene.position === "right" ? "reverse" : ""
      }`}
    >
      {scene.caracterSpriteUrl && (
        <img
          src={scene.caracterSpriteUrl}
          alt="caracter-image"
          className="caracter-image"
        />
      )}

      <div>
        <div
          className={`scene-header ${
            scene.position === "right" ? "reverse" : ""
          }`}
        >
          {scene.caracter?.name && (
            <p className={`character-name text-${scene.position}`}>
              {scene.caracter.name}
            </p>
          )}

          {!isMainStory && (
            <span className="tag tag-active">{currentTheme}</span>
          )}
        </div>
        <div className={`speech text-${scene.position}`}>{scene.speech}</div>
      </div>
    </div>
  );
};

export default SceneCard;
