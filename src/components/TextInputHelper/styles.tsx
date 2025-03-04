import styled from "styled-components";
import { getHelperTextColor } from "../TextInput/utils/styleHelpers";
import { InputStatus } from "../TextInput/utils/types";
import Typography, { TypographyProps } from "../Typography/Typography";

interface HelperTextProps extends TypographyProps {
  $type: InputStatus;
}

export const TextInputHelperContainer = styled.div`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const TypographyStyled: React.FC<HelperTextProps> = styled(
  Typography
)<HelperTextProps>`
  color: ${({ $type }) => getHelperTextColor($type)};
`;
