import React, { Component } from 'react';

import Header from './Header/Header';
import EditorArea from './EditorArea/EditorArea';
import { Wrapper } from './MainStyles.js';

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <EditorArea />
      </Wrapper>
    );
  }
}

export default Main;
