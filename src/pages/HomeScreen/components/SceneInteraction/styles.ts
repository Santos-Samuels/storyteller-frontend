import { Typography } from "@/components";
import { CharacterPositionEnum } from "@/shared/interfaces/character.entity";
import styled from "styled-components";

interface ContainerProps {
  direction: CharacterPositionEnum;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: ${({ direction }) =>
    direction === CharacterPositionEnum.LEFT ? "flex-start" : "flex-end"}; */
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 50%;

  background-color: rgba(255, 255, 255, 0.9);
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2.5)}`};
  border-radius: ${({ theme }) => theme.card.borderRadius.md};
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledTypography = styled(Typography)`
  white-space: break-spaces;
  word-wrap: break-word;
`;
