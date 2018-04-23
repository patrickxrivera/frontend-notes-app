import React, { Component } from 'react';

import { Wrapper, Title, OptionWrapper, Heading, Description } from './ContextMenuStyles';
import './styles.css';

class ContextMenu extends Component {
  render() {
    return (
      <Wrapper>
        <div autoFocus={true}>
          <Title>Basic Blocks</Title>
        </div>
        <OptionWrapper>
          <Heading>Text</Heading>
          <Description>Just start writing with plain text</Description>
        </OptionWrapper>
        <OptionWrapper>
          <Heading>Bulleted List</Heading>
          <Description>Create a simple bulleted list.</Description>
        </OptionWrapper>
        <OptionWrapper>
          <Heading>Numbered List</Heading>
          <Description>Create a list with numbering.</Description>
        </OptionWrapper>
        <OptionWrapper>
          <Heading>Text</Heading>
          <Description>Just start writing with plain text</Description>
        </OptionWrapper>
        <OptionWrapper>
          <Heading>Bulleted List</Heading>
          <Description>Create a simple bulleted list.</Description>
        </OptionWrapper>
        <OptionWrapper>
          <Heading>Numbered List</Heading>
          <Description>Create a list with numbering.</Description>
        </OptionWrapper>
      </Wrapper>
    );
  }
}

export default ContextMenu;
