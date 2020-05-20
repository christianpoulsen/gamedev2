import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { orange, pink, blue } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import ViewContainer from '../components/ViewContainer';
import Blob from '../components/Blob';
import {setPlayer} from '../store/playerActions';
import {changeView, Views} from '../store/viewActions';

import AndyPng from '../assets/Andy.webp';
import SofiaPng from '../assets/Sofia.webp';

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
        '& img': {
            padding: theme.spacing(3),
            width: theme.spacing(12),
        }
    },
    preSpace: {
        '& div': {
            whiteSpace: 'pre',
        }
    }
}));

const welcomeText = `WELCOME TO THE STARTUP
SIMULATOR

Nice of you to FINALLY join. We are
kind of in a hurry. We have a business to
start and a product to launch before 
our competitors.

So let’s get started.

First of all.
Select a character:`;

const Welcome: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handlePickPlayer = (player: string) => () => {
    dispatch(setPlayer(player));
    dispatch(changeView(Views.VALUE_PROPOSITION))
  }

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={40} className={classes.preSpace}>
                {welcomeText}
            </Blob>
        </Box>
        <Box pt={4}>
            <Box className={classes.personBlob} justifyContent="flex-end">
                <Box display="flex" justifyContent="center" flexDirection="column">
                        <Blob color={pink[400]} size={18} onClick={handlePickPlayer("Sofia")} >
                            <img src={SofiaPng} alt="sofia icon" />
                        </Blob>
                    <Typography variant="body1" align="center">Sofia</Typography>
                </Box>
            </Box>
            <Box className={classes.personBlob} justifyContent="flex-start">
                <Box display="flex" justifyContent="center" flexDirection="column" mt={-11}>
                    <Blob color={blue[400]} size={18} onClick={handlePickPlayer("Andy")} className={classes.personBlob}>
                        <img src={AndyPng} alt="andy icon" />
                    </Blob>
                    <Typography variant="body1" align="center">Andy</Typography>
                </Box>
            </Box>
        </Box>
    </ViewContainer>
  );
}

export default Welcome;
