import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 15px;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  margin-left: 0.5rem;
`;

export const Action = styled.span`
  margin: 0 0.8rem;
  padding: 5px 8px;
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    border-radius: 4px;
    transition: background 0.1s ease-in;
  }
`;

export const Auth = styled.div`
  display: inline-block;
`;

export const Divider = styled.div`
  border-right: 1px solid rgb(221, 221, 221);
  height: 14px;
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
`;
