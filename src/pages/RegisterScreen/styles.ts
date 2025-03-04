import { Typography } from "@/components";
import styled from "styled-components";
import bgImage from "../../assets/auth-wallpaper.jpg";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
`;

export const SignupBox = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  text-align: center;
`;

export const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.pallete.colors.secondary.lightBlue["500"]};
`;

export const StyledLink = styled.a`
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.pallete.colors.secondary.lightBlue["500"]};

  &:hover {
    text-decoration: underline;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(1)};
`;
