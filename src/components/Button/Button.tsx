import theme from "@/style/theme";
import { FC, ReactNode, useMemo } from "react";
import { BeatLoader } from "react-spinners";
import Typography from "../Typography/Typography";
import * as S from "./styles";
import { buttonIconSize, getButtonTypographySize } from "./utils/styleHelpers";
import { ButtonSize, ButtonType } from "./utils/types";

export interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
  label?: string;
  disabled?: boolean;
  silentDisabled?: boolean;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: () => any;
  isLoading?: boolean;
  testID?: string;
  labelAlign?: "left" | "center" | "right";
  iconSize?: number;
}

const Button: FC<ButtonProps> = ({
  type,
  size,
  leftAdornment,
  rightAdornment,
  label,
  disabled,
  onClick,
  isLoading,
  labelAlign = "center",
  silentDisabled = false,
  iconSize,
  ...rest
}) => {
  const showShadow = useMemo(() => type === "FAB", [type]);
  const buttonType = useMemo(() => (type === "FAB" ? "primary" : type), [type]);
  const iconSizeValue = useMemo(
    () => iconSize ?? buttonIconSize[size],
    [iconSize]
  );

  const renderButtonContent = () => {
    if (isLoading)
      return (
        <BeatLoader
          color={theme.pallete.button.disabled.text}
          size={iconSizeValue / 2}
        />
      );

    return (
      <>
        {leftAdornment}
        {label && (
          <Typography
            variant={getButtonTypographySize(size)}
            children={label}
          />
        )}
        {rightAdornment}
      </>
    );
  };

  return (
    <S.ButtonContainer
      $type={buttonType}
      $size={size}
      $showShadow={showShadow}
      onClick={onClick}
      disabled={disabled || isLoading || silentDisabled}
      {...rest}
    >
      <S.ButtonContent $size={size} $labelAlign={labelAlign}>
        {renderButtonContent()}
      </S.ButtonContent>
    </S.ButtonContainer>
  );
};

export default Button;
