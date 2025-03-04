import { Spin } from "antd";
import Typography from "../Typography/Typography";
import * as S from "./styles";

const LoadingAnimation = () => {
  return (
    <S.LoadingContainer>
      <Spin size="large" />
      <Typography variant="body2" children="Carregando os dados..." />
    </S.LoadingContainer>
  );
};

export default LoadingAnimation;
