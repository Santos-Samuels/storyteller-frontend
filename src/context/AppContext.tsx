import { CreateStoryResponse } from "@/shared/interfaces/story.interface";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  story?: CreateStoryResponse;
  currentTheme: string;
  isMainStory: boolean;
  setStory: Dispatch<SetStateAction<CreateStoryResponse | undefined>>;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
  setIsMainStory: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [story, setStory] = useState<CreateStoryResponse>();
  const [currentTheme, setCurrentTheme] = useState<string>("");
  const [isMainStory, setIsMainStory] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        story,
        currentTheme,
        isMainStory,
        setStory,
        setCurrentTheme,
        setIsMainStory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

