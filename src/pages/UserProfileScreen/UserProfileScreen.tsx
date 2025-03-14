import { PageContainer, Typography } from "@/components";
import UserService from "@/shared/services/user.service";
import { KeyOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Card } from "antd";
import * as S from "./styles";

const UserProfileScreen = () => {
  const userId = "a6a78d25-ab8e-4a98-a361-e123f1c6dd3a";
  const mockedApiKey = "sk-*************";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getUser", userId],
    queryFn: () => UserService.getById(userId),
  });

  return (
    <PageContainer
      title="Perfil de usuário"
      isLoading={isLoading}
      isError={isError}
      errorMessage="Erro ao carregar o perfil do usuário"
    >
      <S.ProfileContainer>
        <Card>
          <S.AvatarContainer>
            <Avatar size={80} icon={<UserOutlined />} />
            <Typography variant="h3">{data?.data.name}</Typography>
          </S.AvatarContainer>

          <S.InfoRow>
            <MailOutlined />
            <Typography variant="label1">{data?.data.email}</Typography>
          </S.InfoRow>
          <S.InfoRow>
            <KeyOutlined />
            <Typography variant="label1">
              {data?.data.apiKey || "Nenhuma API Key cadastrada"}
            </Typography>
          </S.InfoRow>
        </Card>
      </S.ProfileContainer>
    </PageContainer>
  );
};

export default UserProfileScreen;
