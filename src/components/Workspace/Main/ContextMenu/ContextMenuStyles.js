import styled from 'styled-components';

export const Title = styled.div`
  color: rgb(165, 165, 165);
  line-height: 120%;
  font-size: 11px;
  padding-left: 14px;
  padding-right: 14px;
  margin-top: 11px;
  margin-bottom: 8px;
  display: flex;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const Heading = styled.div`
  font-size: 15px;
  line-height: 120%;
`;

export const Description = styled.div`
  font-size: 12px;
  line-height: 120%;
  color: rgb(196, 196, 196);
`;

export const OptionWrapper = styled.div`
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    transition: background 0.1s ease-in;
    cursor: pointer;
  }
`;

export const isActive = {
  background: 'rgba(58, 56, 52, 0.08)',
  transition: 'all 140ms ease-in',
  cursor: 'pointer'
};

export const subMenuStyles = {
  borderRadius: '3px',
  background: 'white',
  boxShadow: 'rgba(84, 70, 35, 0.3) 0px 6px 20px',
  position: 'relative',
  width: '324px',
  height: '275px',
  paddingTop: '3px',
  paddingBottom: '3px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'scroll'
};

export const blockContainerStyle = {
  paddingTop: '4px',
  paddingBottom: '4px',
  paddingLeft: '14px',
  minHeight: '46px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};
