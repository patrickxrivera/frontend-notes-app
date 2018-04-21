import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 236px;
  z-index: 99;
  background: linear-gradient(rgb(251, 250, 248), rgb(250, 249, 246) 70px, rgb(249, 247, 243));
  height: 100vh;
  padding: 12px;
`;

export const Shade = styled.div`
  color: rgb(119, 119, 119);
`;

export const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Block = styled.div`
  border-radius: 3px;
  width: 17.76px;
  height: 17.76px;
  background: rgb(186, 185, 184);
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-right: 6px;
`;

export const Name = styled.div`
  margin-right: 6px;
  color: rgb(68, 68, 68);
  font-weight: 500;
`;
