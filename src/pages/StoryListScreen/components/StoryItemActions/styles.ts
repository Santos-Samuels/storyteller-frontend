import { DeleteFilled } from "@ant-design/icons";
import { FaShare } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const StyledDeleteIcon = styled(DeleteFilled)`
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.pallete.button.danger.background};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.pallete.button.dangerHover.background};
  }
`;

export const StyledShareIcon = styled(FaShare)`
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.pallete.button.neutralActive.background};
`;
