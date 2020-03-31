import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { orange, pink, blue } from '@material-ui/core/colors';

import Blob from '../components/Blob';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: `calc(100% - ${theme.spacing(12)}px)`,
        padding: theme.spacing(4),
    },
    personBlob: {
        display: 'flex',
        cursor: 'pointer',
    }
}));

const welcomeText = `Welcome to THE STARTUP
SIMULATOR

Nice of you to FINALLY join. We are
kind of in a hurry. We have a business to
start and a product to launch before 
our competitors.

So let’s get started.

First of all though.
Select a character:`;

const Welcome: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <Box display="flex" justifyContent="center">
            <Blob color={orange} size={44}>
                {welcomeText}
            </Blob>
        </Box>
        <Box pt={4}>
            <Box className={classes.personBlob} justifyContent="flex-end">
                <Box display="flex" justifyContent="center" flexDirection="column">
                        <Blob color={pink} size={22} >
                            img
                        </Blob>

                    <Typography variant="body1" align="center">Sofia</Typography>
                </Box>
            </Box>
            <Box className={classes.personBlob} justifyContent="flex-start">
                <Box display="flex" justifyContent="center" flexDirection="column" mt={-11}>
                    <Blob color={blue} size={22}>
                    img
                    </Blob>
                    <Typography variant="body1" align="center">Andy</Typography>
                </Box>
            </Box>
        </Box>
    </div>
  );
}

export default Welcome;
