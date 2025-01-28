import { FC } from "react";
import styled from "styled-components";
import {
  buttonIconSize,
  buttonsSpaceMutiples,
  getDropShadowStyle,
} from "./utils/styleHelpers";
import { ButtonSize, ButtonThemeType } from "./utils/types";

interface ButtonContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $type: ButtonThemeType;
  $size: ButtonSize;
  $showShadow: boolean;
}

interface ButtonContentProps extends React.HTMLAttributes<HTMLDivElement> {
  $size: ButtonSize;
  $labelAlign: "left" | "center" | "right";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ theme, $type }) =>
    theme.pallete.button[$type].background};
  padding: ${({ theme, $size }) =>
    `${theme.spacing(
      buttonsSpaceMutiples[$size].paddingVertical
    )} ${theme.spacing(buttonsSpaceMutiples[$size].paddingHorizontal)}`};
  border-radius: ${({ $size }) => buttonIconSize[$size] * 2}px;
  border: none;
  align-self: flex-start;
  ${({ $size, $showShadow }) => getDropShadowStyle($size, $showShadow)};
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  p {
    color: ${({ theme, $type }) => theme.pallete.button[$type].text};
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme, $type }) =>
      theme.pallete.button[
        `${$type}Active` as keyof typeof theme.pallete.button
      ].background};
  }

  &:hover p,
  &:focus p,
  &:active p {
    color: ${({ theme, $type }) =>
      theme.pallete.button[
        `${$type}Active` as keyof typeof theme.pallete.button
      ].text};
  }

  &:disabled {
    background-color: ${({ theme }) =>
      theme.pallete.button.disabled.background};
  }

  &:disabled p {
    color: ${({ theme }) => theme.pallete.button.disabled.text};
  }
`;

export const ButtonContent: FC<ButtonContentProps> = styled.div<ButtonContentProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ $labelAlign }) => {
    if ($labelAlign === "left") {
      return "flex-start";
    }

    if ($labelAlign === "right") {
      return "flex-end";
    }

    return $labelAlign;
  }};
  gap: ${({ theme, $size }) => theme.spacing(buttonsSpaceMutiples[$size].gap)};
`;
