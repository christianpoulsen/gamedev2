import React from 'react';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import ViewHeader from './components/ViewHeader';
import Welcome from './views/Welcome';
import ValueProposition from './views/ValueProposition';
import TheTeam from './views/TheTeam';
import RememberThis from './views/RememberThis';
import ViewContainer from './components/ViewContainer';
import Home from './views/Home';

const useStyles = makeStyles(theme => ({
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Home />
  )
}

export default App;
