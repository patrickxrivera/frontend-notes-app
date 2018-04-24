import React, { Component } from 'react';
import { curry } from 'ramda';
import map from 'lodash/map';

import basicBlocks from './data';
import {
  Wrapper,
  Title,
  OptionWrapper,
  Heading,
  Description,
  isActive,
  subMenuStyles,
  blockContainerStyle
} from './ContextMenuStyles';
import './styles.css';

class ContextMenu extends Component {
  state = {
    isScrollMode: false,
    upperBound: 0,
    lowerBound: 4,
    scrollAmount: 53
  };

  scrollToPosition = (cursor) => {
    const { elem } = this.refs;
    const { isScrollMode, lowerBound, upperBound } = this.state;

    const INITIAL_SCROLL = 30;
    const SCROLL_MODE_FRONT = 4;
    const SCROLL_MODE_BACK = basicBlocks.length - 1;

    if (!isScrollMode && (cursor === SCROLL_MODE_FRONT || cursor === SCROLL_MODE_BACK)) {
      this.setState({ isScrollMode: true });
    }

    if (cursor > lowerBound) this.handleScrollDown(elem);

    if (cursor < upperBound) this.handleScrollUp(elem);
  };

  // TODO: DRY this up
  handleScrollDown = (elem) => {
    const { upperBound, lowerBound, scrollAmount } = this.state;

    this.setState({ upperBound: upperBound + 1, lowerBound: lowerBound + 1 }, () => {
      elem.scrollTop += scrollAmount;
    });
  };

  handleScrollUp = (elem) => {
    const { upperBound, lowerBound, scrollAmount } = this.state;

    this.setState({ upperBound: upperBound - 1, lowerBound: lowerBound - 1 }, () => {
      elem.scrollTop -= scrollAmount;
    });
  };

  setBasicBlockStyle = (cursor, idx) => (cursor === idx ? { ...isActive } : {});

  renderBasicBlock = curry((cursor, { title, description }, idx) => (
    <OptionWrapper key={title} style={this.setBasicBlockStyle(cursor, idx)}>
      <div style={blockContainerStyle}>
        <Heading>{title}</Heading>
        <Description>{description}.</Description>
      </div>
    </OptionWrapper>
  ));

  renderContextMenu = (cursor) => map(basicBlocks, this.renderBasicBlock(cursor));

  render() {
    const { cursor } = this.props;
    const { isScrollMode } = this.state;

    // TODO: Find a better place to put this
    if (this.refs.elem) this.scrollToPosition(cursor);

    return (
      // TODO: Create better spacing on scroll
      <div style={subMenuStyles} ref="elem">
        {!isScrollMode && (
          <div>
            <Title>Basic Blocks</Title>
          </div>
        )}
        {this.renderContextMenu(cursor)}
      </div>
    );
  }
}

export default ContextMenu;
