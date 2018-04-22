import React, { Component } from 'react';
import { map } from 'ramda';
import Nestable from 'react-nestable';

import { Wrapper, PagesMenuText, MenuItem, MenuItemWrapper, StyledCaret } from './PagesMenuStyles';

class PagesMenu extends Component {
  isCollapsed = () => {
    const form = document.forms[0] || null;

    return form && form.elements['collapsed'].checked;
  };

  renderMenuItem = ({ item: { text } }) => (
    <MenuItemWrapper>
      <MenuItem>
        <StyledCaret size={18} />
        <PagesMenuText>{text}</PagesMenuText>
      </MenuItem>
    </MenuItemWrapper>
  );

  render() {
    // const menuItems = map(this.renderMenuItem, pages);
    const items = [
      { id: 0, text: 'Engineering', children: [{ id: 6, text: 'Roadmap' }] },
      {
        id: 1,
        text: 'Ideas',
        children: [{ id: 2, text: 'Blog Posts' }]
      },
      { id: 3, text: 'To-do List' }
    ];

    return (
      <Wrapper>
        <Nestable items={items} renderItem={this.renderMenuItem} collapsed={true} />
      </Wrapper>
    );
  }
}

export default PagesMenu;
