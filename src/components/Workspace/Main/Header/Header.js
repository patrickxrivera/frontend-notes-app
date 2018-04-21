import React, { Component } from 'react';
import More from 'react-icons/lib/md/more-horiz';

import { Wrapper, Selected, Options, Text, IconWrapper } from './HeaderStyles';

const Header = () => (
  <Wrapper>
    <Text>Engineering</Text>
    <Options>
      <Text>Share</Text>
      <Text>Favorite</Text>
      <IconWrapper>
        <More size={28} />
      </IconWrapper>
    </Options>
  </Wrapper>
);

export default Header;
