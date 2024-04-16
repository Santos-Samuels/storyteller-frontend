import { IScene } from "@/shared/interfaces/scene.interface";
import { FC, ReactNode, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SceneCard from "../molecules/SceneCard";
import SceneControlButtons from "../molecules/SceneControlButtons";

interface SceneListProps {
  scenes: IScene[];
  initialSlide?: number;
  handleUpdateCurrentTheme: (index: number) => void;
  footerComponent?: (activeSldie: number, total: number) => ReactNode;
}

const SceneList: FC<SceneListProps> = ({
  scenes,
  initialSlide,
  handleUpdateCurrentTheme,
  footerComponent,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const id = Date.now().toString();

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
          handleUpdateCurrentTheme(swiper.activeIndex);
        }}
        navigation={{
          prevEl: `.prev-${id}`,
          nextEl: `.next-${id}`,
        }}
        initialSlide={initialSlide}
      >
        {scenes.map((item) => (
          <SwiperSlide key={item.speech}>
            <SceneCard scene={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SceneControlButtons
        activeSlide={activeSlide}
        total={scenes.length}
        id={id}
      />

      {footerComponent?.(activeSlide, scenes.length)}
    </div>
  );
};

export default SceneList;
