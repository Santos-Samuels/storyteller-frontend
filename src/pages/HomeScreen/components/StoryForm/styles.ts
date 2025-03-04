import { Typography } from "@/components";
import { Form, FormProps, Input } from "antd";
import { FC } from "react";
import styled from "styled-components";

export const FormContainer: FC<FormProps> = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledInput = styled(Input)`
  width: 300px;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.pallete.colors.neutral.gray["600"]};
`;
