import styled from "styled-components";
import PageTitle from "../PageTitle/PageTitle";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  max-width: 1100px;
  margin: auto;
`;

export const StyledPageTitle = styled(PageTitle)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ChildrenContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)};
`;
