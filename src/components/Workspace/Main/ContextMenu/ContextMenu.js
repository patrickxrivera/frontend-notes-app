import React, { Component } from 'react';
import { curry } from 'ramda';
import map from 'lodash/map';

import basicBlocks from './data';
import {
  Title,
  OptionWrapper,
  Heading,
  Description,
  isActive,
  subMenuStyles
} from './ContextMenuStyles';
import './styles.css';

class ContextMenu extends Component {
  componentDidMount() {
    this.scrollToPosition();
  }

  scrollToPosition = () => {
    this.refs.elem.scrollTop = 340;
  };

  setBasicBlockStyle = (cursor, idx) => (cursor === idx ? { ...isActive } : {});

  renderBasicBlock = curry((cursor, { title, description }, idx) => (
    <OptionWrapper key={title} style={this.setBasicBlockStyle(cursor, idx)}>
      <Heading>{title}</Heading>
      <Description>{description}.</Description>
    </OptionWrapper>
  ));

  renderContextMenu = (cursor) => map(basicBlocks, this.renderBasicBlock(cursor));

  render() {
    const { cursor } = this.props;

    return (
      <div style={subMenuStyles} ref="elem">
        <div autoFocus={true}>
          <Title>Basic Blocks</Title>
        </div>
        {this.renderContextMenu(cursor)}
      </div>
    );
  }
}

export default ContextMenu;
