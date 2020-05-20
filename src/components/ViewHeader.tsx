import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors'

import MusicToggle from './MusicToggle';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: lightBlue[600],
        fontWeight: 'bold',
        padding: theme.spacing(1),
        color: theme.palette.common.white,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));

const ViewHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
        <Typography variant="h5">
            THE STARTUP SIMULATOR
        </Typography>
        <MusicToggle />
    </div>
  );
}

export default ViewHeader;
