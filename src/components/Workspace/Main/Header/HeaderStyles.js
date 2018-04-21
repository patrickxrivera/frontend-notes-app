import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(81, 81, 81);
  font-size: 14px;
  padding-left: 16px;
  padding-right: 16px;
  height: 45px;
`;

export const IconWrapper = styled.div`
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    cursor: pointer;
    transition: background 0.1s ease-in;
  }
  border-radius: 3px;
  padding: 0 3px;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  padding: 4px 8px;
  border-radius: 3px;
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    cursor: pointer;
    transition: background 0.1s ease-in;
  }
`;
