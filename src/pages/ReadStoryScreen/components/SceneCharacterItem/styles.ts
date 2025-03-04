import { CharacterPositionEnum } from "@/shared/interfaces/character.entity";
import styled from "styled-components";

interface ContainerProps {
  $position?: CharacterPositionEnum;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(1)};

  @media screen and (max-width: 768px) {
    ${({ $position }) => {
      if ($position)
        return `flex-direction:
          ${
            $position === CharacterPositionEnum.LEFT
              ? "column"
              : "column-reverse"
          };
    align-items:
      ${$position === CharacterPositionEnum.LEFT ? "flex-start" : "flex-end"};`;
    }}
  }
`;
