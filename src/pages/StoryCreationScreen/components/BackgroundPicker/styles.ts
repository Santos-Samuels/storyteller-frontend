import { Typography } from "antd";
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

// background-image: ${({ $bgUrl }) => `url(${$bgUrl})`};
export const BgPreviewContainer: FC<BgPreviewContainerProps> = styled.div<BgPreviewContainerProps>`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(2)};
  background-image: url(https://i.sstatic.net/90nGa.jpg);
  background-size: cover;
  background-position: center;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.pallete.colors.neutral.gray["600"]};
`;
