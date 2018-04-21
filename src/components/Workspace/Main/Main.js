import React, { Component } from 'react';

import Header from './Header/Header';
// import Editor from './Editor/Editor';
import { Wrapper } from './MainStyles.js';

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <div>Editor</div>
      </Wrapper>
    );
  }
}

export default Main;
