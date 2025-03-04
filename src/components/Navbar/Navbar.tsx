import {
  BookOutlined,
  LogoutOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (_props) => {
  const navigate = useNavigate();
  const activeKey = useMemo(() => {
    return window.location.pathname;
  }, []);

  return (
    <S.Container>
      <S.HeaderContent>
        <S.StyledMenu
          mode="horizontal"
          activeKey={activeKey}
          inlineIndent={4}
          items={[
            {
              label: "Criar Story",
              key: "/story/create",
              icon: <PlusOutlined />,
              onClick: () => navigate("/story/create"),
            },
            {
              label: "Minhas Stories",
              key: "/story/list",
              icon: <BookOutlined />,
              onClick: () => navigate("/story/list"),
            },
            {
              label: "Perfil",
              key: "/user/profile",
              icon: <UserOutlined />,
              onClick: () => navigate("/user/profile"),
            },
            {
              label: "Sair",
              key: "/logout",
              icon: <LogoutOutlined />,
              onClick: () => {},
              danger: true,
            },
          ]}
        />
      </S.HeaderContent>
    </S.Container>
  );
};

export default Navbar;
