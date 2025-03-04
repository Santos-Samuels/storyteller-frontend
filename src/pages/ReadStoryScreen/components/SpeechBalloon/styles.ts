import { Tag, Typography } from "@/components";
import { CharacterPositionEnum } from "@/shared/interfaces/character.entity";
import styled from "styled-components";

interface CharacterNameProps {
  $align: CharacterPositionEnum;
}

interface StyledTypographyProps {
  $align: CharacterPositionEnum;
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.pallete.background.primary};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.card.borderRadius.md};
  position: relative;
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing(2)};

  border: 1px solid ${({ theme }) => theme.pallete.colors.neutral.gray[100]};

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CharacterName = styled(Tag)<CharacterNameProps>`
  position: absolute;
  top: -${({ theme }) => theme.spacing(2)};
  left: ${({ theme, $align }) =>
    $align === CharacterPositionEnum.LEFT ? theme.spacing(2) : "auto"};
  right: ${({ theme, $align }) =>
    $align === CharacterPositionEnum.RIGHT ? theme.spacing(2) : "auto"};
`;

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  text-align: ${({ $align }) =>
    $align === CharacterPositionEnum.LEFT ? "left" : "right"};

  animation: blink 0.8s infinite;
`;

export const ChildrenContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
