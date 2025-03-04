import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const NotFoundScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <S.NotFoundContainer>
      <S.Title children="404" />
      <S.Description variant="body2" children="Página não encontrada" />
      <Button type="primary" onClick={handleGoHome}>
        Voltar para a Home
      </Button>
    </S.NotFoundContainer>
  );
};

export default NotFoundScreen;
