import { ThemeTypography } from "@/style/types/typography";
import { FC } from "react";
import * as S from "./styles";
import { tagsTypographyVariants } from "./utils/styleHelpers";
import { TagSize, TagType } from "./utils/types";

export interface TagProps {
  label: string;
  type: TagType;
  size: TagSize;
  customStyles?: {
    backgroundColor: string;
    textColor: string;
  };
}

const Tag: FC<TagProps> = ({ label, size, type, customStyles, ...rest }) => {
  return (
    <S.TagContainer
      $type={type}
      $size={size}
      $customBgColor={customStyles?.backgroundColor}
      {...rest}
    >
      <S.TagLabel
        variant={tagsTypographyVariants[size] as keyof ThemeTypography}
        $type={type}
        $customTextColor={customStyles?.textColor}
      >
        {label}
      </S.TagLabel>
    </S.TagContainer>
  );
};

export default Tag;
