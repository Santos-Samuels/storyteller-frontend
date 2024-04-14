import { FC } from "react";

interface SceneControlButtonsProps {
  activeSlide: number;
  total: number;
  id: string;
}

const SceneControlButtons: FC<SceneControlButtonsProps> = ({
  activeSlide,
  total,
  id,
}) => {
  return (
    <div className="row">
      <button type="button" className={`button prev-${id}`}>
        Anterior
      </button>

      <p className="label">
        {activeSlide + 1} de {total}
      </p>

      <button type="button" className={`button next-${id}`}>
        Próximo
      </button>
    </div>
  );
};

export default SceneControlButtons;
