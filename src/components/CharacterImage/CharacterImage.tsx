import { FC, useEffect, useState } from "react";
import * as S from "./styles";

interface CharacterImageProps {
  path: string;
  height?: number;
}

// Mapeia todas as imagens dentro da pasta
const images = import.meta.glob("../../assets/charactersSprites/*");

const CharacterImage: FC<CharacterImageProps> = ({ height = 200, path }) => {
  const [image, setImage] = useState<string>();

  const getCharacterImage = async () => {
    try {
      const imageImport = images[`../../assets/charactersSprites/${path}`];

      if (!imageImport) {
        throw new Error("Imagem não encontrada");
      }

      const module = (await imageImport()) as any;
      setImage(module.default);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacterImage();
  }, [path]);

  if (!image) return;
  return <S.CharacterImage $avatarImageHeight={height ?? 100} src={image} />;
};

export default CharacterImage;
