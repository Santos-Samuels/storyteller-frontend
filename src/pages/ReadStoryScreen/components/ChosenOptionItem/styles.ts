import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: max-content;
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.card.borderRadius.lg};
  background-color: ${({ theme }) => theme.pallete.background.primary};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
`;
