import { Typography } from "@/components";
import styled from "styled-components";
import bgImage from "../../assets/bgImage.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url(${bgImage});
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
