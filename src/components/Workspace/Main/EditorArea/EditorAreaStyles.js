import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  color: rgb(66, 66, 65);
  padding: 0px 200px 30vh;
  width: 70%;
`;

export const EditorWrapper = styled.div`
  margin-top: 2rem;
  font-size: 16px;
  line-height: 1.5;
`;

export const ContextMenuWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  opacity: 0;
  animation: ${({ showMenu, x, y }) =>
    showMenu ? `${popEnter(x, y)} 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards` : ''};
`;

export const popEnter = (x, y) => keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translate(${x}px, ${y}px) scale(0.9);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translate(${x}px, ${y}px) scale(1);
  }
`;
