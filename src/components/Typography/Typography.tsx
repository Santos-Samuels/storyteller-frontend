import { ThemeTypography } from "@/style/types/typography";
import { FC, ReactNode } from "react";
import { TextStyled } from "./styles";

export interface TypographyProps {
  variant: keyof ThemeTypography;
  children: ReactNode | string;
}

const Typography: FC<TypographyProps> = ({ variant, children, ...rest }) => {
  return (
    <TextStyled variant={variant} {...rest}>
      {children}
    </TextStyled>
  );
};

export default Typography;
