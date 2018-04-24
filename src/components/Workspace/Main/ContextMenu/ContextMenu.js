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

  async componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;

    const { elem } = this.refs;
    const { reset, cursor } = this.props;
    const { isScrollMode, upperBound, lowerBound } = this.state;

    if (reset && elem) {
      this.resetElem(elem);

      await this.setState({
        isScrollMode: false,
        upperBound: 0,
        lowerBound: 4
      });
    }

    this.handleScroll(cursor, elem);
  }

  resetElem = (elem) => {
    elem.scrollTop = 0;
  };

  handleScroll = (cursor, elem) => {
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
    const { cursor } = this.props;

    if (cursor === basicBlocks.length - 1) {
      elem.scrollTop = elem.scrollHeight;
      this.setState({ upperBound: basicBlocks.length - 5, lowerBound: basicBlocks.length - 1 });
    } else {
      elem.scrollTop += scrollAmount;
      this.setState({ upperBound: upperBound + 1, lowerBound: lowerBound + 1 });
    }
  };

  handleScrollUp = (elem) => {
    const { upperBound, lowerBound, scrollAmount } = this.state;
    const { cursor } = this.props;

    if (cursor === 0) {
      elem.scrollTop = 0;
      this.setState({ upperBound: 0, lowerBound: 4 });
    } else {
      elem.scrollTop -= scrollAmount;
      this.setState({ upperBound: upperBound - 1, lowerBound: lowerBound - 1 });
    }
  };

  setBasicBlockStyle = (cursor, idx) => (cursor === idx ? { ...isActive } : {});

  render() {
    const { cursor } = this.props;

    return (
      // TODO: Create better spacing on scroll
      <div style={subMenuStyles} ref="elem">
        {this.renderTitle()}
        {this.renderContextMenu(cursor)}
      </div>
    );
  }

  renderTitle = () =>
    !this.state.isScrollMode && (
      <div>
        <Title>Basic Blocks</Title>
      </div>
    );

  renderContextMenu = (cursor) => map(basicBlocks, this.renderBasicBlock(cursor));

  renderBasicBlock = curry((cursor, { title, description }, idx) => (
    <OptionWrapper key={title} style={this.setBasicBlockStyle(cursor, idx)}>
      <div style={blockContainerStyle}>
        <Heading>{title}</Heading>
        <Description>{description}.</Description>
      </div>
    </OptionWrapper>
  ));
}

export default ContextMenu;
