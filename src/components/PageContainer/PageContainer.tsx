import { FC, PropsWithChildren } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import Navbar from "../Navbar/Navbar";
import * as S from "./styles";

interface PageContainerProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  showNavbar?: boolean;
  isLoading?: boolean;
}

const PageContainer: FC<PageContainerProps> = ({
  showNavbar = true,
  ...props
}) => {
  return (
    <S.Container>
      <Navbar />

      {props.isLoading ? (
        <LoadingAnimation />
      ) : (
        <S.ChildrenContainer>
          {props.title && showNavbar && (
            <S.StyledPageTitle title={props.title} subtitle={props.subtitle} />
          )}

          {props.children}
        </S.ChildrenContainer>
      )}
    </S.Container>
  );
};

export default PageContainer;
