import { Typography } from "@/components";
import styled from "styled-components";

export const StyledTypography = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.pallete.colors.neutral.gray["300"]};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
