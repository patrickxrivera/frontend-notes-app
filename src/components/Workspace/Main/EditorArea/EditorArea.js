import { Editor } from 'slate-react';
import { Value } from 'slate';

import React from 'react';
import initialValue from './value.json';
import PageTitle from '../PageTitle/PageTitle';
import basicBlocks from '../ContextMenu/data';
import { isKeyHotkey } from 'is-hotkey';
import { Wrapper, EditorWrapper } from './EditorAreaStyles';
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
    cursor: 0
  };

  hasMark = (type) => {
    const { value } = this.state;
    return value.activeMarks.some((mark) => mark.type == type);
  };

  hasBlock = (type) => {
    const { value } = this.state;
    return value.blocks.some((node) => node.type == type);
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  onKeyDown = (event, change) => {
    this.setContextMenuState(event);
    this.handleHotkeyPress(event, change);
  };

  handleHotkeyPress = (event, change) => {
    let mark;

    switch (true) {
      case isBoldHotkey(event):
        mark = 'bold';
        break;
      case isItalicHotkey(event):
        mark = 'italic';
        break;
      case isUnderlinedHotkey(event):
        mark = 'underlined';
        break;
      case isCodeHotkey(event):
        mark = 'code';
        break;
      default:
        return;
    }

    event.preventDefault();
    change.toggleMark(mark);
    return true;
  };

  handleClick = () => {
    if (this.state.showMenu) {
      this.setState({ showMenu: false });
    }
  };

  setContextMenuState = (e) => {
    this.handleEscapeKeyPress(e);
    this.handleSlashKeyPress(e);
    this.handleArrowKeyPress(e);
  };

  handleEscapeKeyPress = (e) => {
    if (e.key === 'Escape') this.setState({ cursor: 0, showMenu: false });
  };

  handleSlashKeyPress = (e) => {
    e.key === '/'
      ? this.setState({ showMenu: true, reset: true })
      : this.setState({ reset: false });
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

  onClickMark = (event, type) => {
    event.preventDefault();
    const { value } = this.state;
    const change = value.change().toggleMark(type);
    this.onChange(change);
  };

  onClickBlock = (event, type) => {
    event.preventDefault();
    const { value } = this.state;
    const change = value.change();
    const { document } = value;

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

    this.onChange(change);
  };

  render() {
    return <div>{this.renderEditor()}</div>;
  }

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type);
    const onMouseDown = (event) => this.onClickMark(event, type);

    return (
      // eslint-disable-next-line react/jsx-no-bind
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <span className="material-icons">{icon}</span>
      </span>
    );
  };

  renderBlockButton = (type, icon) => {
    const isActive = this.hasBlock(type);
    const onMouseDown = (event) => this.onClickBlock(event, type);

    return (
      // eslint-disable-next-line react/jsx-no-bind
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <span className="material-icons">{icon}</span>
      </span>
    );
  };

  renderEditor = () => {
    const { cursor, showMenu, reset } = this.state;

    return (
      <Wrapper className="editor">
        <PageTitle />
        <EditorWrapper>
          <Editor
            className="editorStyles"
            placeholder="Type '/' for commands"
            value={this.state.value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            onClick={this.handleClick}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
            spellCheck
            autoFocus
          />
          <div
            className={`context-menu ${
              showMenu ? 'context-menu__on-enter' : 'context-menu__on-leave'
            }`}>
            <ContextMenu reset={reset} cursor={cursor} />
          </div>
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
