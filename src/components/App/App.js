import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import SignUp from '../Auth/SignUp/SignUp';
import SignIn from '../Auth/SignIn/SignIn';
import RequireAuth from '../Auth/RequireAuth/RequireAuth';
import Workspace from '../Workspace/Workspace';
import { Wrapper, AppStyles } from './AppStyles';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/:userId" component={RequireAuth(Workspace)} />
        </Switch>
      </Wrapper>
    </Router>
  </MuiThemeProvider>
);

export default App;
