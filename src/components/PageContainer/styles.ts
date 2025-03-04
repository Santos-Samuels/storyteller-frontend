import styled from "styled-components";
import PageTitle from "../PageTitle/PageTitle";
import Typography from "../Typography/Typography";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 1100px;
  margin: auto;
  height: 100vh;
`;

export const StyledPageTitle = styled(PageTitle)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ChildrenContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledTypography = styled(Typography)`
  margin-top: 10px;
`;
