import React, { Component } from 'react';
import { map } from 'ramda';

import { Wrapper, PagesMenuText, MenuItem, MenuItemWrapper, StyledCaret } from './PagesMenuStyles';

const pages = ['Engineering', 'Ideas', 'To-do List'];

class PagesMenu extends Component {
  renderMenuItem = (page) => (
    <MenuItemWrapper>
      <MenuItem>
        <StyledCaret size={18} />
        <PagesMenuText>{page}</PagesMenuText>
      </MenuItem>
    </MenuItemWrapper>
  );

  render() {
    const menuItems = map(this.renderMenuItem, pages);

    return (
      <Wrapper>
        <div>{menuItems}</div>
      </Wrapper>
    );
  }
}

export default PagesMenu;
