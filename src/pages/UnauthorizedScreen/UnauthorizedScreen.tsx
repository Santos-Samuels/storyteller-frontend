import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const UnauthorizedScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/auth/login");
  };

  return (
    <S.Container>
      <S.Title children="401" />
      <S.Description
        variant="body2"
        children="Houve um problema na autenticação"
      />
      <Button type="primary" onClick={handleGoHome}>
        Login
      </Button>
    </S.Container>
  );
};

export default UnauthorizedScreen;
