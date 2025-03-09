import { Typography } from "@/components";
import { FC, HtmlHTMLAttributes } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

interface BgPreviewContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  $bgUrl: string;
}

export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: ${({ theme }) => theme.spacing(2)} auto;
  width: max-content;
`;

export const StyledCheckIcon = styled(FaCheck)`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 500px;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const BgPreviewContainer: FC<BgPreviewContainerProps> = styled.div<BgPreviewContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: ${({ theme }) => theme.spacing(2)};
  background-image: ${({ $bgUrl }) => `url(${$bgUrl})`};
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: ${({ theme }) => theme.card.borderRadius.md};
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;
