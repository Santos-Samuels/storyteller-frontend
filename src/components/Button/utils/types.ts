import { ThemePallete } from "@/style/types/pallete";

export type ButtonThemeType = keyof ThemePallete["button"];

export type ButtonType =
  | "FAB"
  | "primary"
  | "secondary"
  | "tertiary"
  | "neutral"
  | "neutralTertiary"
  | "danger"
  | "dangerTertiary"
  | "transparent"
  | "transparentTertiary";

export type ButtonSize = "sm" | "md" | "lg";
