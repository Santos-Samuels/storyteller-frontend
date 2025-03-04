import { IStory } from "@/shared/interfaces/story.entity";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  story?: IStory;
  setStory: Dispatch<SetStateAction<IStory | undefined>>;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [story, setStory] = useState<IStory>();

  return (
    <AppContext.Provider
      value={{
        story,
        setStory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

