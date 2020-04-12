import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { orange, pink, blue, green, purple } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import InfoBar from '../components/InfoBar';
import ViewContainer from '../components/ViewContainer';
import { useTypedSelector } from '../store';

const useStyles = makeStyles(theme => ({
    transparentDiv: {
        width: theme.spacing(14),
    }
}));

const Build: React.FC = () => {
  const classes = useStyles();
  const vp = useTypedSelector(state => state.vp);

  return (
    <ViewContainer header={<InfoBar />}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <div className={classes.transparentDiv} />
            <Blob size={18} color={green[300]}>
                <Typography variant="h5" color="inherit">BUILD</Typography>
            </Blob>
            <Blob size={14} color={green[300]}>
                <Typography variant="body1">{"BUILD A\nDIFFERENT\nSMART-\nWATCH"}</Typography>
            </Blob>
        </Box>
        <Typography variant="h5">{vp.text}</Typography>
    </ViewContainer>
  );
}

export default Build;
