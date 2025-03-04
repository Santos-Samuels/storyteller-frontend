import { FC } from "react";
import * as S from "./styles";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: FC<PageTitleProps> = (props) => {
  return (
    <S.TitleContainer>
      <S.StoryTitle variant="h2" children={props.title} />
      {props.subtitle && <S.StyledTypography
        variant="body2"
        children={props.subtitle}
      />}
    </S.TitleContainer>
  );
};

export default PageTitle;
