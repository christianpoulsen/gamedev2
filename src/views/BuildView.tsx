import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import InfoBar from '../components/InfoBar';
import ViewContainer from '../components/ViewContainer';
import { useTypedSelector } from '../store';
import { changeView, Views } from '../store/viewActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    transparentDiv: {
        width: theme.spacing(14),
    },
    vp: {
        textAlign: "center",
    }
}));

const Build: React.FC = () => {
  const classes = useStyles();
  const vp = useTypedSelector(state => state.vpState.currentVP);
  const dispatch = useDispatch();

  const handleBack = () => dispatch(changeView(Views.HOME));

  const handlePickNewVP = () => dispatch(changeView(Views.CHANGE_VP));

  if (!vp) return <div/>;

  return (
    <ViewContainer header={<InfoBar />}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Blob size={6} color={purple[300]} onClick={handleBack}>
                {"<--"}
            </Blob>
            <Blob size={18} color={green[300]}>
                <Typography variant="h5" color="inherit">BUILD</Typography>
            </Blob>
            <Blob size={14} color={green[300]} onClick={handlePickNewVP}>
                <Typography variant="body1">{"BUILD A\nDIFFERENT\nSMART-\nWATCH"}</Typography>
            </Blob>
        </Box>
        <Typography variant="h5" className={classes.vp}>{vp.text}</Typography>
        <Box>
            <Box>
                <Blob size={18} color={green[300]}>{"SOURCE\nCOMPONENTS"}</Blob>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt={-6}>
                <Blob size={18} color={green[300]}>{"MAKE\nHARDWARE"}</Blob>
            </Box>
            <Box mt={-6}>
                <Blob size={18} color={green[300]}>{"WRITE CODE"}</Blob>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt={-6}>
                <Blob size={18} color={green[300]}>{"TEST PRODUCT"}</Blob>
            </Box>
        </Box>
    </ViewContainer>
  );
}

export default Build;
