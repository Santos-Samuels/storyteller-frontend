import { FC } from "react";
import styled from "styled-components";

interface CharacterImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  $avatarImageHeight: number;
}

export const CharacterImage: FC<CharacterImageProps> = styled.img<CharacterImageProps>`
  height: ${({ $avatarImageHeight }) => $avatarImageHeight}px;
  object-fit: contain;
`;
