import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: lightBlue[600],
        fontWeight: 'bold',
        padding: theme.spacing(1),
        color: theme.palette.common.white,
    }
}));

const ViewHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
        <Typography variant="h5">
            THE STARTUP SIMULATOR
        </Typography>
    </div>
  );
}

export default ViewHeader;
