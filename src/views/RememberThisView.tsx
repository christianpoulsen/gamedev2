import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import Blob from '../components/Blob';
import ViewContainer from '../components/ViewContainer';
import { changeView, Views } from '../store/viewActions';

const useStyles = makeStyles(theme => ({
    next: {
        display: 'flex',
        justifyContent: 'center'
    },
    preSpace: {
        '& div': {
            whiteSpace: 'pre',
        }
    }
}));

const rememberThisText = `Seems like you are
ready to get started.

Now remember this!`;

const RememberThis: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNext = () => dispatch(changeView(Views.HOME));

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={26} className={classes.preSpace}>
                {rememberThisText}
            </Blob>
        </Box>
        <Box pt={4} display="flex" flexDirection="column" justifyContent="space-between" height="100%">
            <Typography variant="h6">
                Your overall goal is to sell a smartwatch to a customer. If you succeed you’ll win.
            </Typography>
            <Typography>
                To sell a smartwatch, you need to build it first. It takes around 4-5 months to build a watch.
            </Typography>
            <Typography>
                The faster you build a smartwatch and make a sale, the better you’ll score.
            </Typography>
            <Typography>
                If you build the wrong smartwatch, you cannot sell it and you’ll have to start building a different smartwatch.
            </Typography>
            <Typography>
                If you do not succeed in building a smartwatch within a year it will be too late and your competitors will have won.
            </Typography>
            <Blob color={green[300]} size={8} onClick={handleNext} className={classes.next}>
                Start
            </Blob>
        </Box>
    </ViewContainer>
  );
}

export default RememberThis;
