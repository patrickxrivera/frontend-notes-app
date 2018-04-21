import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import { Wrapper } from './WorkspaceStyles.js';

const Workspace = ({}) => (
  <Wrapper>
    <Sidebar />
    <Main />
  </Wrapper>
);

export default Workspace;
