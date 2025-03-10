import { Result } from "antd";
import { FC, PropsWithChildren } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import Navbar from "../Navbar/Navbar";
import * as S from "./styles";

interface PageContainerProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  showNavbar?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

const PageContainer: FC<PageContainerProps> = ({
  showNavbar = true,
  ...props
}) => {
  if (props.isLoading)
    return (
      <S.Container>
        <Navbar />
        <LoadingAnimation />
      </S.Container>
    );

  if (props.isError)
    return (
      <S.Container>
        <Navbar />
        <S.ChildrenContainer>
          <Result
            status="error"
            title="Erro ao carregar!"
            subTitle={
              props.errorMessage ?? "Ocorreu um erro ao carregar a página!"
            }
          />
        </S.ChildrenContainer>
      </S.Container>
    );

  //
  return (
    <S.Container>
      <Navbar />

      <S.ChildrenContainer>
        {props.title && showNavbar && (
          <S.StyledPageTitle title={props.title} subtitle={props.subtitle} />
        )}

        {props.children}
      </S.ChildrenContainer>
    </S.Container>
  );
};

export default PageContainer;
