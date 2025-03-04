import { FC } from "react";
import styled from "styled-components";
import TextInputHelper from "../TextInputHelper/TextInputHelper";
import { getInputBgColor, getInputBorderColor } from "./utils/styleHelpers";
import { InputStatus, InputType } from "./utils/types";

interface TextInputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  $type: InputType;
  $status: InputStatus;
  $isDisabled: boolean;
  $fullWidth: boolean;
}

export const TextInputContainer: FC<TextInputContainerProps> = styled.div<TextInputContainerProps>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding-vertical: ${({ theme }) => theme.spacing(1.5)};
  padding-horizontal: ${({ theme }) => theme.spacing(2)};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $status, $type }) =>
    getInputBorderColor({ prop: $status, type: $type })};
  border-radius: ${({ theme }) => theme.card.borderRadius.helf};
  background-color: ${({ $type, $isDisabled }) =>
    getInputBgColor({ prop: $type, isDisabled: $isDisabled })};
  align-self: baseline;
`;

export const InputStyled = styled.input`
  border: none;
`;

export const RightContentContainer = styled.div`
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const TextInputHelperStyled = styled(TextInputHelper)`
  margin-horizontal: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
