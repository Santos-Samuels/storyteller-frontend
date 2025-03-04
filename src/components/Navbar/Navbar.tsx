import {
  BookOutlined,
  LogoutOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  const navigate = useNavigate();
  const activeKey = useMemo(() => {
    return window.location.pathname;
  }, []);

  return (
    <S.HeaderContainer>
      <S.StyledMenu mode="horizontal" activeKey={activeKey}>
        <Menu.Item
          children="Criar Story"
          key="/story/create"
          icon={<PlusOutlined />}
          onClick={() => navigate("/story/create")}
        />

        <Menu.Item
          children="Minhas Stories"
          key="/story/list"
          icon={<BookOutlined />}
          onClick={() => navigate("/story/list")}
        />

        <Menu.Item
          children="Perfil"
          key="/profile"
          icon={<UserOutlined />}
          onClick={() => {}}
        />
        <Menu.Item
          children="Sair"
          key="/logout"
          icon={<LogoutOutlined />}
          onClick={() => {}}
          danger
        />
      </S.StyledMenu>
    </S.HeaderContainer>
  );
};

export default Navbar;
