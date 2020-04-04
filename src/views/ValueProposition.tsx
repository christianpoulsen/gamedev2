import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import Option from '../components/Option';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: `calc(100% - ${theme.spacing(12)}px)`,
        padding: theme.spacing(4),
    },
}));

const letsGetStartedText = `Well, Hello Sofia.
Let’s get started. You and your
team came up with this brilliant
idea.

A SMARTWATCH FOR KIDS.

But you are not sure exactly
which smartwatch to build.

Chose one:`;

const ValueProposition: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={44}>
                {letsGetStartedText}
            </Blob>
        </Box>
        <Box pt={4}>
            <Option index={1} img={"img"} text="Build a smartwatch to help kids develop healthy habits" />
            <Option index={2} img={"img"} text="Build a smartwatch to help parents keep an eye on their kids" />
            <Option index={3} img={"img"} text="Build a smartwatch to help kids stay motivated and track fitness" />
        </Box>
    </div>
  );
}

export default ValueProposition;
