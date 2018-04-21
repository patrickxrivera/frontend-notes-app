import React, { Component } from 'react';

import { Wrapper, Shade, AccountWrapper, Block, Name } from './SidebarStyles.js';

class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
        <Shade>
          <AccountWrapper>
            <Block>P</Block>
            <Name>Patrick</Name>
          </AccountWrapper>
        </Shade>
      </Wrapper>
    );
  }
}

export default Sidebar;
