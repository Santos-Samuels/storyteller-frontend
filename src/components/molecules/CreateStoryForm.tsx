import { AppContext } from "@/context/AppContext";
import { CreateStoryDTO } from "@/shared/interfaces/story.interface";
import StoryService from "@/shared/services/story.service";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useContext, useEffect, useState } from "react";

const CreateStoryForm = () => {
  const [theme, setTheme] = useState<string>("");
  const { setStory } = useContext(AppContext);

  const { isPending, data, mutate } = useMutation({
    mutationKey: ["createStory"],
    mutationFn: createStoryQuery,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ theme });
  };

  useEffect(() => {
    if (!data) return;
    setStory(data);
    setTheme("");
  }, [data]);

  return (
    <>
      <form className="row" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite um tema"
          required
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="input"
          disabled={isPending}
        />

        <button type="submit" className="button" disabled={!theme || isPending}>
          Criar
        </button>
      </form>

      {isPending && <p className="label">Carregando...</p>}
    </>
  );
};

const createStoryQuery = async (params: CreateStoryDTO) => {
  const { createStory } = StoryService;

  const { data } = await createStory(params);
  return data;
};

export default CreateStoryForm;
