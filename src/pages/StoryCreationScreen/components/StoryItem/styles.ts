import { Typography } from "@/components";
import { DeleteFilled, ExclamationCircleFilled } from "@ant-design/icons";
import { Image } from "antd";
import styled from "styled-components";

export const StoryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.card.borderRadius.md};
  background-color: ${({ theme }) => theme.pallete.background.secondary};
  border: 1px solid ${({ theme }) => theme.pallete.colors.neutral.gray["200"]};
  max-width: 700px;
  margin: ${({ theme }) => theme.spacing(3.5)} auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const SecundaryText = styled(Typography)`
  color: ${({ theme }) => theme.pallete.colors.neutral.gray["600"]};
`;

export const CharactersContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(1)};
  justify-content: center;
  flex-wrap: wrap;
`;

export const CharacterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const CharacterName = styled(Typography)`
  text-align: center;
`;

export const CharacterImagesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const StyledDiscartIcon = styled(DeleteFilled)`
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.pallete.button.danger.background};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.pallete.button.dangerHover.background};
  }
`;

export const StyledAlertIcon = styled(ExclamationCircleFilled)`
  color: ${({ theme }) => theme.pallete.colors.primary.yellow["600"]};
`;

export const ActionActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const StyledImage = styled(Image)`
  max-width: 200px;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;
