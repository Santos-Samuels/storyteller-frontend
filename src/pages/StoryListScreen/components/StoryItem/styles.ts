import { Typography } from "@/components";
import styled from "styled-components";

export const CardContainer = styled.div`
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.pallete.colors.neutral.gray["500"]};
  margin-top: ${({ theme }) => theme.spacing(1.5)};
`;
