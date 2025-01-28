import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContentContainer = styled.div`
  max-width: 60%;
  margin: 50px auto;
  overflow: hidden;
  height: calc(100vh - 100px);
`;
