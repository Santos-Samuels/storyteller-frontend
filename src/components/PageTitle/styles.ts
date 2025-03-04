import { Typography } from "@/components";
import styled from "styled-components";

export const TitleContainer = styled.div`
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  border-bottom: 1px solid
    ${({ theme }) => theme.pallete.colors.neutral.gray["200"]};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  width: max-content;
`;

export const StoryTitle = styled(Typography)`
  text-align: center;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.pallete.colors.neutral.gray["600"]};
`;
