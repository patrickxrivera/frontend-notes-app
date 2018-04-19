import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 190px 36px 0;
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Heading = styled.div`
  font-size: 74px;
  font-weight: 700;
  letter-spacing: -0.005em;
  line-height: 1.1;
  width: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  margin-top: 1rem;
`;

export const Description = styled.div`
  color: rgb(4, 4, 2);
  font-size: 19px;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 0.2px;
`;

export const SubDescription = styled.div`
  color: rgb(153, 153, 153);
  font-size: 15px;
  margin-top: 10px;
  font-weight: 300;
`;

export const Btn = styled.div`
  line-height: 24px;
  margin-top: 10px;
  padding: 0.2rem;
  border-radius: 3px;
  text-align: center;
  font-weight: 500;
  height: 25px;
  background: rgba(235, 87, 87, 0.03);
  color: rgb(235, 87, 87);
  border: 1px solid rgb(249, 200, 200);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
`;
