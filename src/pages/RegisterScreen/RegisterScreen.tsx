import PageTitle from "@/components/PageTitle/PageTitle";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Tooltip } from "antd";
import * as S from "./styles";

const RegisterScreen = () => {
  const onFinish = (values: any) => {
    console.log("Cadastro:", values);
  };

  return (
    <S.SignupContainer>
      <S.SignupBox>
        <PageTitle title="Storyteller" subtitle="Faça seu cadastro!" />

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "Por favor, insira seu e-mail!" },
              { type: "email", message: "E-mail inválido!" },
            ]}
          >
            <Input placeholder="Digite seu e-mail" />
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

          <Form.Item
            label="Confirmação de Senha"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Por favor, confirme sua senha!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("As senhas não coincidem!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirme sua senha" />
          </Form.Item>

          <Form.Item
            label={
              <S.LabelContainer>
                <span>ChatGPT API Key</span>
                <Tooltip title="Obtenha sua API Key em: https://platform.openai.com/api-keys">
                  <InfoCircleOutlined style={{ color: "#1890ff" }} />
                </Tooltip>
              </S.LabelContainer>
            }
            name="apiKey"
            rules={[
              {
                required: true,
                message: "Insira sua API Key!",
              },
            ]}
          >
            <Input placeholder="Digite sua API Key " />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Confirmar Cadastro
            </Button>
          </Form.Item>
        </Form>

        <S.StyledLink href="/login">
          <S.StyledTypography variant="label2" children="Já tenho uma conta" />
        </S.StyledLink>
      </S.SignupBox>
    </S.SignupContainer>
  );
};

export default RegisterScreen;
