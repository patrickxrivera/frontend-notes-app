import { Editor } from 'slate-react';
import { Value } from 'slate';

import React from 'react';
import initialValue from './value.json';
import PageTitle from '../PageTitle/PageTitle';
import basicBlocks from '../ContextMenu/data';
import { isKeyHotkey } from 'is-hotkey';
import { Wrapper, EditorWrapper, ContextMenuWrapper } from './EditorAreaStyles';
import ContextMenu from '../ContextMenu/ContextMenu';
import './styles.css';

const DEFAULT_NODE = 'paragraph';

const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');

class EditorArea extends React.Component {
  state = {
    value: Value.fromJSON(initialValue),
    showMenu: false,
    reset: false,
    cursor: 0,
    coords: {
      x: null,
      y: null
    }
  };

  hasBlock = (type) => {
    const { value } = this.state;
    return value.blocks.some((node) => node.type == type);
  };

  handleChange = ({ value }) => {
    this.setState({ value });
  };

  resetContextMenu = () => {
    this.setState({ reset: true, cursor: 0, showMenu: false });
  };

  handleKeyDown = (e, change) => {
    this.setContextMenuState(e);
    this.handleHotkeyPress(e, change);
  };

  handleHotkeyPress = (e, change) => {
    let mark;

    switch (true) {
      case isBoldHotkey(e):
        mark = 'bold';
        break;
      case isItalicHotkey(e):
        mark = 'italic';
        break;
      case isUnderlinedHotkey(e):
        mark = 'underlined';
        break;
      case isCodeHotkey(e):
        mark = 'code';
        break;
      default:
        return;
    }

    e.preventDefault();
    change.toggleMark(mark);
    return true;
  };

  handleClick = () => {
    if (this.state.showMenu) this.resetContextMenu();
  };

  setContextMenuState = (e) => {
    this.handleSlashKeyPress(e);
    this.handleArrowKeyPress(e);
    this.handleEnterKeyPress(e);
    this.handleEscapeKeyPress(e);
  };

  handleSlashKeyPress = async (e) => {
    if (e.key === '/') {
      await this.getCoords();
      this.setState({ showMenu: true });
    }
  };

  getCoords = async () => {
    // position context menu to the right of the text caret
    const X_OFFSET = 9;
    const Y_OFFSET = 20;

    const { x, y } = window
      .getSelection()
      .getRangeAt(0)
      .getBoundingClientRect();

    // copy state's coords and reset state with x and y
    let coords = { ...this.state.coords };
    coords = { x: x + X_OFFSET, y: y + Y_OFFSET };
    await this.setState({ coords });
  };

  handleArrowKeyPress = (e) => {
    const { cursor, showMenu } = this.state;

    switch (true) {
      case showMenu && e.key === 'ArrowUp':
        e.preventDefault();
        cursor === 0
          ? this.setState({ cursor: basicBlocks.length - 1 })
          : this.setState({ cursor: this.state.cursor - 1 });
        break;

      case showMenu && e.key === 'ArrowDown':
        e.preventDefault();
        cursor === basicBlocks.length - 1
          ? this.setState({ cursor: 0 })
          : this.setState({ cursor: this.state.cursor + 1 });
        break;
    }
  };

  handleEnterKeyPress = (e) => {
    const { cursor, showMenu } = this.state;

    if (showMenu && e.key === 'Enter') {
      const { type } = basicBlocks[cursor];
      this.handleBlockEvent(e, type);
    }
  };

  handleEscapeKeyPress = (e) => {
    if (e.key === 'Escape') this.resetContextMenu();
  };

  handleBlockEvent = (e, type) => {
    e.preventDefault();
    const { value } = this.state;
    const { document } = value;
    const change = value.change();

    // Handle everything but list buttons.
    if (type != 'bulleted-list' && type != 'numbered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        change
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        change.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some((block) => {
        return !!document.getClosest(block.key, (parent) => parent.type == type);
      });

      if (isList && isType) {
        change
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else if (isList) {
        change
          .unwrapBlock(type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list')
          .wrapBlock(type);
      } else {
        change.setBlocks('list-item').wrapBlock(type);
      }
    }

    this.handleChange(change);
    this.resetContextMenu();
  };

  handleKeyPress = (event) => {
    if (event.charCode == 13) {
      event.preventDefault();
    }
  };

  render() {
    return <div>{this.renderEditor()}</div>;
  }

  renderEditor = () => {
    const { cursor, showMenu, reset, coords: { x, y } } = this.state;

    return (
      <Wrapper className="editor">
        <PageTitle />
        <EditorWrapper>
          <Editor
            className="editorStyles"
            placeholder="Type '/' for commands"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onKeyPress={this.handleKeyPress}
            onClick={this.handleClick}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
            spellCheck={true}
            autoFocus={true}
          />
          <ContextMenuWrapper showMenu={showMenu} x={x} y={y}>
            <ContextMenu handleBlockEvent={this.handleBlockEvent} reset={reset} cursor={cursor} />
          </ContextMenuWrapper>
        </EditorWrapper>
      </Wrapper>
    );
  };

  renderNode = (props) => {
    const { attributes, children, node } = props;
    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
    }
  };

  renderMark = (props) => {
    const { children, mark } = props;
    switch (mark.type) {
      case 'bold':
        return <strong>{children}</strong>;
      case 'code':
        return <code>{children}</code>;
      case 'italic':
        return <em>{children}</em>;
      case 'underlined':
        return <u>{children}</u>;
    }
  };
}

export default EditorArea;
