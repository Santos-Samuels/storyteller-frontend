import { Typography } from "@/components";
import { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $bgUrl: string;
}

export const Container: FC<ContainerProps> = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: ${({ $bgUrl }) => `url(${$bgUrl})`};
  background-size: cover;
  background-position: center;
  height: 70vh;
  border-radius: ${({ theme }) => theme.card.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const StoryTitle = styled(Typography)`
  text-align: center;
  /* color: ${({ theme }) => theme.pallete.colors.neutral.gray["300"]}; */
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.pallete.colors.neutral.gray["500"]};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
