import { Typography } from "@/components";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 100px;
  color: ${(props) => props.theme.pallete.colors.secondary.lightBlue["700"]};
`;

export const Description = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;
