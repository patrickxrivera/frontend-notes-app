import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 3px;
  background: white;
  box-shadow: rgba(84, 70, 35, 0.3) 0px 6px 20px, rgba(84, 70, 35, 0.14) 0px 1px 3px,
    rgba(0, 0, 0, 0.08) 0px 0px 1px;
  position: relative;
  width: 324px;
  z-index: 99;
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  color: rgb(66, 66, 65);
`;

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
  padding: 8px 1rem;
  &:hover {
    background: rgba(58, 56, 52, 0.08);
    transition: background 0.1s ease-in;
    cursor: pointer;
  }
`;
