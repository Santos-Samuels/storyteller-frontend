import { IStory } from "@/shared/interfaces/story.interface";
import { FC } from "react";

interface StoryDetailsProps {
  theme: IStory["theme"];
  summary: IStory["summary"];
  ramifications?: IStory["ramifications"];
  currentTheme: string;
  interactedRamification: string[];
}

const StoryDetails: FC<StoryDetailsProps> = ({
  theme,
  summary,
  ramifications,
  currentTheme,
  interactedRamification,
}) => {
  const getRamificationTagStyle = (ramification?: string) => {
    if (!ramification) return "";

    if (currentTheme === ramification) return "tag-active";

    if (interactedRamification.includes(ramification)) return "tag-interacted";

    return "";
  };

  return (
    <div className="story-info">
      <h3>{theme}</h3>
      <p className="label">{summary}</p>

      <div className="tag-container">
        {ramifications?.map((ramification, index) => (
          <p
            key={index}
            className={`tag ${getRamificationTagStyle(ramification)}`}
          >
            {ramification}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StoryDetails;
