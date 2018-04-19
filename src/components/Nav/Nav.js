import React from 'react';
import { Edit2 } from 'react-feather';

import {
  Wrapper,
  TitleWrapper,
  Title,
  Action,
  Auth,
  Divider
} from './NavStyles';

const Nav = ({}) => (
  <Wrapper>
    <TitleWrapper>
      <Edit2 size={20} />
      <Title>Notes.io</Title>
    </TitleWrapper>
    <div>
      <Action>Pricing</Action>
      <Divider />
      <Auth>
        <Action>Sign in</Action>
        <Action>Sign up</Action>
      </Auth>
    </div>
  </Wrapper>
);

export default Nav;
