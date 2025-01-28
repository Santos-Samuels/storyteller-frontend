import theme from "@/style/theme";
import { ButtonSize } from "./types";

export const buttonsSpaceMutiples = {
  lg: {
    paddingHorizontal: 3,
    paddingVertical: 2,
    gap: 1.5,
  },
  md: {
    paddingHorizontal: 2.5,
    paddingVertical: 1.5,
    gap: 1,
  },
  sm: {
    paddingHorizontal: 2,
    paddingVertical: 1,
    gap: 0.5,
  },
};

export const buttonIconSize = {
  lg: 24,
  md: 20,
  sm: 16,
};

export const getButtonTypographySize = (size: ButtonSize) => {
  switch (size) {
    case "lg":
      return "button1";
    case "md":
      return "button2";
    default:
      return "button3";
  }
};

export const getDropShadowStyle = (size: ButtonSize, showShadow: boolean) => {
  if (!showShadow) return "";

  return `
    shadow-color: ${theme.card.dropshadow[size].shadowColor};
    shadow-offset: ${theme.card.dropshadow[size].shadowOffset.width}px ${theme.card.dropshadow[size].shadowOffset.height}px;
    shadow-opacity: ${theme.card.dropshadow[size].shadowOpacity};
    shadow-radius: ${theme.card.dropshadow[size].shadowRadius}px;`;
};