import { PageTitle } from "@/components";
import { AuthLoginDTO, IAuthData } from "@/shared/interfaces/auth.entity";
import AuthService from "@/shared/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./styles";

const LoginScreen = () => {
  const navigate = useNavigate();

  const onSucess = (_data: AxiosResponse<IAuthData>) => {
    toast.success("Você está logado!");
    navigate("/story/create");
    //TODO: set token in local storage
  };

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: AuthService.login,
    onSuccess: onSucess,
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data?.message || "Erro ao realizar login");
    },
  });

  const onFinish = (values: AuthLoginDTO) => {
    mutation.mutate(values);
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
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={mutation.isPending}
            >
              Confirmar Login
            </Button>
          </Form.Item>
        </Form>

        <S.StyledLink href="/auth/register">
          <S.StyledTypography variant="label2" children="Criar conta" />
        </S.StyledLink>
      </S.LoginBox>
    </S.LoginContainer>
  );
};

export default LoginScreen;
