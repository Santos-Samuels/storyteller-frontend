import theme from "@/style/theme";
import { InputStatus, InputType } from "./types";

export const getHelperTextColor = (prop: InputStatus) => {
  switch (prop) {
    case "focused":
      return theme.pallete.button.secondary.text;
    case "error":
      return theme.pallete.toast.error.background;
    case "success":
      return theme.pallete.colors.secondary.green["800"];
    case "disabled":
      return theme.pallete.colors.neutral.gray["300"];
    default:
      return theme.pallete.colors.neutral.gray["700"];
  }
};

interface GetInputBorderColorProps {
  type: InputType;
  prop: InputStatus;
}

export const getInputBorderColor = ({
  prop,
  type,
}: GetInputBorderColorProps) => {
  switch (prop) {
    case "focused":
      return theme.pallete.button.primary.background;
    case "error":
      return theme.pallete.button.danger.background;
    case "success":
      return theme.pallete.colors.secondary.green["400"];
    case "disabled":
      return theme.pallete.colors.neutral.gray["300"];
    default:
      return type === "default"
        ? theme.pallete.colors.neutral.gray["100"]
        : theme.pallete.colors.neutral.gray["050"];
  }
};

interface GetInputBgColorProps {
  isDisabled: boolean;
  prop: InputType;
}

export const getInputBgColor = ({ prop, isDisabled }: GetInputBgColorProps) => {
  if (isDisabled) {
    return theme.pallete.colors.neutral.gray["100"];
  }

  switch (prop) {
    case "search":
      return theme.pallete.colors.neutral.gray["050"];

    default:
      return theme.pallete.background.primary;
  }
};
