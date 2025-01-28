import { FC } from "react";
import styled from "styled-components";
import Typography, { TypographyProps } from "../Typography/Typography";
import { tagsSpaceMutiples } from "./utils/styleHelpers";
import { TagSize, TagType } from "./utils/types";

interface TagContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  $type: TagType;
  $size: TagSize;
  $customBgColor?: string;
}

interface TagLabelProps extends TypographyProps {
  $type: TagType;
  $customTextColor?: string;
}

export const TagContainer: FC<TagContainerProps> = styled.div<TagContainerProps>`
  background-color: ${({ theme, $type, $customBgColor }) =>
    $customBgColor || theme.pallete.tags[$type].background};
  border-radius: ${({ theme, $size }) => theme.card.borderRadius[$size]};
  padding: ${({ theme, $size }) =>
    `${theme.spacing(tagsSpaceMutiples[$size].paddingVertical)} ${theme.spacing(
      tagsSpaceMutiples[$size].paddingHorizontal
    )}`};
  width: fit-content;
`;

export const TagLabel: FC<TagLabelProps> = styled(Typography)<TagLabelProps>`
  color: ${({ theme, $type, $customTextColor }) =>
    $customTextColor || theme.pallete.tags[$type].text};
`;
