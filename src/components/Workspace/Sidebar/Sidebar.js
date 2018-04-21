import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search } from 'react-feather';
import Caret from 'react-icons/lib/fa/caret-right';
import Add from 'react-icons/lib/md/add';

import {
  Wrapper,
  Shade,
  AccountWrapper,
  Block,
  Name,
  Options,
  SearchWrapper,
  OptionsText,
  optionsIconStyles,
  faStyles,
  NewPageWrapper,
  BottomWrapper
} from './SidebarStyles.js';
import PagesMenu from './PagesMenu/PagesMenu';
import { getFirstNameFrom } from '../../../reducers/auth';
import { format } from './helpers';

class Sidebar extends Component {
  render() {
    const { firstName } = this.props;
    const { initial, name } = format(firstName);

    return (
      <Wrapper>
        <Shade>
          <div>
            <div style={{ paddingTop: '0px' }}>
              <AccountWrapper>
                <Block>{initial}</Block>
                <Name>{name}</Name>
              </AccountWrapper>
            </div>
            <div>
              <div>
                <SearchWrapper>
                  <Search {...optionsIconStyles} />
                  <div>Quick Find</div>
                </SearchWrapper>
              </div>
            </div>
            <PagesMenu />
          </div>
          <BottomWrapper>
            <Add size={20} color="rgba(0, 0, 0, 0.2)" />
            <NewPageWrapper>New Page</NewPageWrapper>
          </BottomWrapper>
        </Shade>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  firstName: getFirstNameFrom(state)
});

export default connect(mapStateToProps)(Sidebar);
