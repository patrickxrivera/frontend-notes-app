import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>Working</div>
    </Router>
  </MuiThemeProvider>
);

export default App;
