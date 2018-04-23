import { Editor } from 'slate-react';
import { Value } from 'slate';

import React from 'react';
import initialValue from './value.json';
import PageTitle from '../PageTitle/PageTitle';
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
    showMenu: false
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
    this.handleKeyPress(event);

    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold';
    } else if (isItalicHotkey(event)) {
      mark = 'italic';
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined';
    } else if (isCodeHotkey(event)) {
      mark = 'code';
    } else {
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

  handleKeyPress = (e) => {
    if (e.key === '/') {
      this.setState({ showMenu: !this.state.showMenu });
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
    return (
      <div>
        {/* {this.renderToolbar()} */}
        {this.renderEditor()}
      </div>
    );
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
          <div className="context-menu context-menu--active">
            <ContextMenu />
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
