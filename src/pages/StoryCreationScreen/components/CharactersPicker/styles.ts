import { Typography } from "@/components";
import { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";

interface ImageOptionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $active?: boolean;
  $disabled?: boolean;
}

export const CharactersContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(8)};
  justify-content: center;
`;

export const CharacterName = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const CharacterImagesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const ImageOption: FC<ImageOptionProps> = styled.div<ImageOptionProps>`
  background-color: ${({ theme, $active }) =>
    $active
      ? theme.pallete.colors.secondary.lightBlue["100"]
      : theme.pallete.background.secondary};
  border-radius: ${({ theme }) => theme.card.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing(1.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: ${({ $disabled, $active }) => ($disabled && !$active ? 0.2 : 1)};

  &:hover {
    transform: ${({ $disabled }) => ($disabled ? "none" : "scale(1.1)")};
  }
`;
