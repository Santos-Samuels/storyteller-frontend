import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  foo: string;
  setFoo: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [foo, setFoo] = useState<string>("Bem Vindo!");

  return (
    <AppContext.Provider value={{ foo, setFoo }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

