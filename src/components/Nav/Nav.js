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
import { linkStyle } from '../../utils/styles';

const Nav = ({}) => (
  <Wrapper>
    <TitleWrapper>
      <Edit2 size={20} />
      <Title>
        <a style={linkStyle} href="/">
          Notes.io
        </a>
      </Title>
    </TitleWrapper>
    <div>
      <Action>Pricing</Action>
      <Divider />
      <Auth>
        <Action>
          <a style={linkStyle} href="/signin">
            Sign in
          </a>
        </Action>
        <Action>
          <a style={linkStyle} href="/signup">
            Sign up
          </a>
        </Action>
      </Auth>
    </div>
  </Wrapper>
);

export default Nav;
