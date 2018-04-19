import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import { Wrapper } from './AppStyles';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Wrapper>
        <Nav />
        <Route exact path="/" component={Home} />
      </Wrapper>
    </Router>
  </MuiThemeProvider>
);

export default App;
