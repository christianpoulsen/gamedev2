import React from 'react';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import ViewHeader from './components/ViewHeader';
import Welcome from './views/Welcome';

const useStyles = makeStyles(theme => ({
  mobileView: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: grey[200],
    alignItems: 'center',
    '& > div': {
      width: 480,
      height: 896,
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down("xs")]: {
        width: '100%',
        height: '100vh',
      }
    }
  }
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.mobileView}>
      <div>
        <ViewHeader />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
