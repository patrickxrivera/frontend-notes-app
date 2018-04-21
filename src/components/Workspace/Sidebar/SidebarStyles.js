import styled from 'styled-components';
import Caret from 'react-icons/lib/fa/caret-right';

export const Wrapper = styled.div`
  width: 236px;
  z-index: 99;
  background: linear-gradient(rgb(251, 250, 248), rgb(250, 249, 246) 70px, rgb(249, 247, 243));
  height: 100vh;
  font-size: 14.5px;
  display: flex;
  flex-direction: column;
`;

export const Shade = styled.div`
  color: rgb(119, 119, 119);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;

export const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    transition: background 0.1s ease-in;
    cursor: pointer;
  }
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
  font-size: 14px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    transition: background 0.1s ease-in;
    cursor: pointer;
  }
`;

export const optionsIconStyles = {
  style: {
    marginLeft: '-1px',
    marginRight: '7px'
  },
  size: '14',
  strokeWidth: '4',
  color: 'rgba(0, 0, 0, 0.2)'
};

export const PagesMenu = styled.div`
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

export const MenuItemWrapper = styled.div`
  padding: 3px 0;
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    cursor: pointer;
    transition: background 0.1s ease-in;
  }
`;

export const NewPageWrapper = styled.div`
  padding-left: 5px;
  font-size: 14px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px inset;
  color: rgb(136, 136, 136);
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    cursor: pointer;
    transition: background 0.1s ease-in;
  }
`;
