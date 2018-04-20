import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import SignUp from '../Auth/SignUp/SignUp';
import Workspace from '../Workspace/Workspace';
import { Wrapper } from './AppStyles';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/:userId" component={Workspace} />
        </Switch>
      </Wrapper>
    </Router>
  </MuiThemeProvider>
);

export default App;
