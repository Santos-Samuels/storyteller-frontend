import styled from "styled-components";
import Typography from "../Typography/Typography";

export const Label = styled(Typography)`
  margin-horizontal: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.pallete.colors.neutral.gray["700"]};
`;

export const RequiredText = styled(Typography)`
  color: ${({ theme }) => theme.pallete.toast.error.background};
`;
