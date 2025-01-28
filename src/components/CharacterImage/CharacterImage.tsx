import { FC, useEffect, useState } from "react";
import * as S from "./styles";

interface CharacterImageProps {
  path: string;
  height?: number;
}

const CharacterImage: FC<CharacterImageProps> = ({ height = 200, path }) => {
  const [image, setImage] = useState<string>();

  const getCharacterImage = async () => {
    try {
      const basePath = "../../assets/charactersSprites/";
      const imagePath = await import(basePath.concat(path));
      setImage(imagePath.default);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacterImage();
  }, []);

  if (!image) return;
  return <S.CharacterImage $avatarImageHeight={height ?? 100} src={image} />;
};

export default CharacterImage;
