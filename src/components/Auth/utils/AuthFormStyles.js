import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 120px;
  width: 400px;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  box-shadow: rgba(29, 29, 31, 0.15) 0 10px 60px;
  height: ${(props) => (props.pathname === '/signup' ? '400px' : '350px')};
  border-radius: 4px;
  padding: 3rem 2.5rem 0;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  border-bottom: 1px solid #dee7ec;
  width: 100%;
  padding-bottom: 10px;
  display: inline-block;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 1rem;
`;

export const btnStyle = {
  marginTop: '3rem',
  textTransform: 'uppercase'
};

export const formFocusStyle = { color: '#2dacf1ff' };

export const fontStyle = { fontFamily: 'inherit' };

export const errorStyle = { float: 'left' };
