import { ThemeTypography } from "@/style/types/typography";
import { FC } from "react";
import { styled } from "styled-components";

interface TextStyledProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: keyof ThemeTypography;
}

export const TextStyled: FC<TextStyledProps> = styled.p<TextStyledProps>`
  font-family: ${(props) => props.theme.typography[props.variant].fontFamily};
  font-size: ${(props) => props.theme.typography[props.variant].fontSize};
  font-style: ${(props) => props.theme.typography[props.variant].fontStyle};
  font-weight: ${(props) => props.theme.typography[props.variant].fontWeight};
  letter-spacing: ${(props) =>
    props.theme.typography[props.variant].letterSpacing};
  text-transform: ${(props) =>
    props.theme.typography[props.variant].textTransform};
  color: ${(props) => props.theme.pallete.colors.neutral.gray["900"]};
`;
