import { CreateStoryForm, SceneList, StoryDetails } from "@/components";
import InteractiveScenes from "@/components/molecules/InteractiveScenes";
import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";

const CreateStoryScreen = () => {
  const { story, currentTheme, isMainStory, setCurrentTheme, setIsMainStory } =
    useContext(AppContext);
  const [interactedRamification, setInteractedRamification] = useState<
    string[]
  >([]);
  const [isInteractiveTime, setIsInteractiveTime] = useState<boolean>(false);
  const [mainStoryPausedIndex, setMainStoryPausedIndex] = useState<number>(0);

  const handleUpdateCurrentTheme = (swiperIndex: number) => {
    if (!isMainStory || !story) return;

    const themeByIndex =
      story.mainStory?.scenes?.[swiperIndex]?.ramificationTheme ||
      story.mainStory.theme;

    const isRamification =
      story.mainStory.ramifications?.includes(themeByIndex);
    if (isRamification && !interactedRamification.includes(themeByIndex)) {
      setInteractedRamification((prev) => [...prev, themeByIndex]);
      setMainStoryPausedIndex(swiperIndex);
      setIsInteractiveTime(true);
    }

    setCurrentTheme(themeByIndex);
  };

  const handleInteractiveAnswer = (value: boolean) => {
    if (value) {
      setIsMainStory(false);
    }

    setIsInteractiveTime(false);
  };

  const renderSceneList = () => {
    if (isInteractiveTime)
      return (
        <InteractiveScenes
          currentTheme={currentTheme}
          isInteractiveTime={isInteractiveTime}
          handleInteractiveAnswer={handleInteractiveAnswer}
        />
      );

    if (!isMainStory) {
      const ramificationScenes =
        story?.ramificationsStories?.find(
          (ramification) => ramification.theme === currentTheme
        )?.scenes || [];

      return (
        <SceneList
          key={"ramification-story"}
          scenes={ramificationScenes}
          handleUpdateCurrentTheme={handleUpdateCurrentTheme}
          footerComponent={renderListFooter}
        />
      );
    }

    const scenes = story?.mainStory.scenes || [];
    return (
      <SceneList
        key="main-story"
        scenes={scenes}
        initialSlide={mainStoryPausedIndex}
        handleUpdateCurrentTheme={handleUpdateCurrentTheme}
        footerComponent={renderListFooter}
      />
    );
  };

  const renderListFooter = (activeSlide: number, total: number) => {
    if (isMainStory || activeSlide !== total - 1) return;

    return (
      <a
        onClick={() => {
          setIsMainStory(true);
        }}
      >
        Voltar para história principal
      </a>
    );
  };

  useEffect(() => {
    if (!story) return;

    setCurrentTheme(story.mainStory.theme);
    setIsMainStory(true);
  }, [story]);

  return (
    <>
      <div>
        <h1>Storyteller</h1>
        <p className="label">Deixe-me contar uma história para você.</p>
      </div>

      <CreateStoryForm />

      {story && (
        <section className="story-container">
          <StoryDetails
            theme={story.mainStory.theme}
            summary={story.mainStory.summary}
            currentTheme={currentTheme}
            interactedRamification={interactedRamification}
            ramifications={story.mainStory.ramifications}
          />

          {renderSceneList()}
        </section>
      )}
    </>
  );
};

export default CreateStoryScreen;
