import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.pallete.background.secondary};
  border-radius: ${({ theme }) => theme.card.borderRadius.lg};

  height: calc(100vh - 100px);
`;

export const ListContainer = styled.div`
  overflow-y: auto;
  padding: 0 -${({ theme }) => theme.spacing(2)};

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.pallete.colors.neutral.gray["100"]};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.pallete.colors.neutral.gray["200"]};
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.pallete.colors.neutral.gray["100"]};
  }
`;

export const HeaderCntainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
