import styled from 'styled-components';
import Caret from 'react-icons/lib/fa/caret-right';

export const Wrapper = styled.div`
  padding-top: 16px;
`;

export const PagesMenuText = styled.div`
  margin-left: 4px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

export const MenuItemWrapper = styled.div`
  width: 100%;
  padding: 3px 0;
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    cursor: pointer;
    transition: background 0.1s ease-in;
  }
`;

export const StyledCaret = styled(Caret)`
  color: rgba(0, 0, 0, 0.2);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1px;
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    transition: background 0.1s ease-in;
    cursor: pointer;
  }
`;
