import { Menu } from "antd";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing(2)};
  left: 50%;
  transform: translate(-50%, 0);
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing(1)};
  z-index: 10;
`;

export const StyledMenu = styled(Menu)`
  border-radius: 12px;
  border: none;
`;
