import "styled-components";
import { ThemeCard } from "./card";
import { ThemePallete } from "./pallete";
import { ThemeSpacingFunction } from "./spacing";
import { ThemeTypography } from "./typography";

export interface CustomTheme {
  spacing: ThemeSpacingFunction;
  card: ThemeCard;
  pallete: ThemePallete;
  typography: ThemeTypography;
}

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
