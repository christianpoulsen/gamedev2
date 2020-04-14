import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { orange, pink, blue } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import ViewContainer from '../components/ViewContainer';
import Blob from '../components/Blob';
import {setPlayer} from '../store/playerActions';
import {changeView, Views} from '../store/viewActions';

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
    },
    preSpace: {
        '& div': {
            whiteSpace: 'pre',
        }
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
  const dispatch = useDispatch();

  const handlePickPlayer = (player: string) => () => {
    dispatch(setPlayer(player));
    dispatch(changeView(Views.THE_TEAM))
  }

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={44} className={classes.preSpace}>
                {welcomeText}
            </Blob>
        </Box>
        <Box pt={4}>
            <Box className={classes.personBlob} justifyContent="flex-end">
                <Box display="flex" justifyContent="center" flexDirection="column">
                        <Blob color={pink[400]} size={22} onClick={handlePickPlayer("Sofia")} >
                            img
                        </Blob>
                    <Typography variant="body1" align="center">Sofia</Typography>
                </Box>
            </Box>
            <Box className={classes.personBlob} justifyContent="flex-start">
                <Box display="flex" justifyContent="center" flexDirection="column" mt={-11}>
                    <Blob color={blue[400]} size={22} onClick={handlePickPlayer("Andy")}>
                        img
                    </Blob>
                    <Typography variant="body1" align="center">Andy</Typography>
                </Box>
            </Box>
        </Box>
    </ViewContainer>
  );
}

export default Welcome;
