import { useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import api from "./api";

export interface GPTHistory {
  theme: string;
  resume: string;
  ramifications: string[];

  scenes: Array<{
    speech: string;
    emotion: string;
    position: string;
  }>;
}

function App() {
  const [theme, setTheme] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [story, setStory] = useState<GPTHistory>();
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    console.log("🚀 ~ handleSubmit ~ theme:", theme)
    try {
      const response = await api.post("/chat", { theme });
      setStory(response.data);
      setTheme("");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const getFakeCaracterName = (index: number) => {
    if (index % 2 === 0) return "João";

    return "Maria";
  };

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
          disabled={isLoading}
        />

        <button type="submit" className="button" disabled={!theme || isLoading}>
          Criar
        </button>
      </form>

      {isLoading && <p className="label">Carregando...</p>}

      {story && !isLoading && (
        <section className="story-container">
          <div className="story-info">
            <h3>{story.theme}</h3>
            <p className="label">{story.resume}</p>

            <div className="tag-container">
              {story.ramifications.map((ramification, index) => (
                <p key={index} className="tag">
                  {ramification}
                </p>
              ))}
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            onSwiper={(swiper) => console.log(swiper)}
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
}

export default App;
