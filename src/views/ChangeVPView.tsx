import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import Blob from '../components/Blob';
import Option from '../components/Option';
import ViewContainer from '../components/ViewContainer';
import { ValueProposition as VPType, setVP } from '../store/vpActions';
import { Views, changeView } from '../store/viewActions';
import { useTypedSelector } from '../store';
import BackHeader from '../components/BackHeader';
import { SmallWhite } from '../components/BigWhite';

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    borderBlockWidth: 2,
    borderStyle: 'solid',
    borderRadius: theme.spacing(1),
    fontSize: 18,
    textAlign: 'center',
    padding: theme.spacing(3, 2),
}
}))

const ChangeVPView: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const vpState = useTypedSelector(state => state.vpState);

  const handleBack = () => dispatch(changeView(Views.BUILD));

  const handlePickVP = (vp: VPType) => () => {
    dispatch(setVP(vp));
    dispatch(changeView(Views.HOME));
  }

  return (
    <ViewContainer>
        <BackHeader 
          color={green[300]} 
          header={
            <Blob size={14} color={green[300]} >
                <Typography variant="body1">
                    <SmallWhite>
                        {"BUILD A\nDIFFERENT\nSMART-\nWATCH"}
                    </SmallWhite>
                </Typography>
            </Blob>
          } 
          onBack={handleBack}
          />
        <Box className={classes.box} style={{ borderColor: green[300] }}>
                Pivot and start building a different smartwatch
        </Box>
        <Box pt={4}>
          {vpState.vps.filter(vp => vp.text !== vpState.currentVP?.text).map((vp, i) => (
            <Option key={i} index={i+1} img={vp.img} text={vp.text} onClick={handlePickVP(vp)} />
          ))}
        </Box>
    </ViewContainer>
  );
}

export default ChangeVPView;
