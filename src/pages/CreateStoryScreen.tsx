import { CreateStoryDTO, GPTStory } from "@/shared/interfaces/story.interface";
import StoryService from "@/shared/services/story.service";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const CreateStoryScreen = () => {
  const [theme, setTheme] = useState<string>("");
  const [story, setStory] = useState<GPTStory>();
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const { isPending, data, mutate, isError, error, isSuccess } = useMutation({
    mutationKey: ["createStory"],
    mutationFn: createStoryQuery,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ theme });
  };

  const getFakeCaracterName = (index: number) => {
    if (index % 2 === 0) return "João";
    return "Maria";
  };

  useEffect(() => {
    if (!data) return;
    setStory(data);
    setTheme("");
  }, [data]);

  return (
    <>
      <div>
        <h1>Storyteller</h1>
        <p className="label">Deixe-me contar uma história para você.</p>
      </div>

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

      {story && !isPending && (
        <section className="story-container">
          <div className="story-info">
            <h3>{story.theme}</h3>
            <p className="label">{story.resume}</p>

            <div className="tag-container">
              {story.ramifications?.map((ramification, index) => (
                <p key={index} className="tag">
                  {ramification}
                </p>
              ))}
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
          >
            {story.scenes.map((item, index) => (
              <SwiperSlide key={index}>
                <p className={`character-name text-${item.position}`}>
                  {getFakeCaracterName(index)}
                </p>
                <div className={`speech text-${item.position}`}>
                  {item.speech}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="row">
            <button type="button" className="button prev">
              Anterior
            </button>

            <p className="label">
              {activeSlide + 1} de {story.scenes.length}
            </p>

            <button type="button" className="button next">
              Próximo
            </button>
          </div>
        </section>
      )}
    </>
  );
};

const createStoryQuery = async (params: CreateStoryDTO) => {
  const { createStory } = StoryService;

  const { data } = await createStory(params);
  return data;
};
