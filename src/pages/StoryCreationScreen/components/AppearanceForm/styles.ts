import styled from "styled-components";

export const ActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;
  justify-content: end;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
