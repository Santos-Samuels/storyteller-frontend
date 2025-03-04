import PageTitle from "@/components/PageTitle/PageTitle";
import { Button, Form, Input } from "antd";
import * as S from "./styles";

const LoginScreen = () => {
  const onFinish = (values: any) => {
    console.log("Login:", values);
  };

  return (
    <S.LoginContainer>
      <S.LoginBox>
        <PageTitle
          title="Storyteller"
          subtitle="Faça login para entrar no sistema!"
        />

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "E-mail é obrigatório",
              },
              { type: "email", message: "E-mail inválido!" },
            ]}
          >
            <Input type="email" placeholder="Digite seu e-mail" />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[
              { required: true, message: "Por favor, insira sua senha!" },
            ]}
          >
            <Input.Password placeholder="Digite sua senha" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Confirmar Login
            </Button>
          </Form.Item>
        </Form>

        <S.StyledLink href="/register">
          <S.StyledTypography variant="label2" children="Criar conta" />
        </S.StyledLink>
      </S.LoginBox>
    </S.LoginContainer>
  );
};

export default LoginScreen;
