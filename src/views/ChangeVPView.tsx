import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { green, lightBlue } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import Blob from '../components/Blob';
import Option from '../components/Option';
import ViewContainer from '../components/ViewContainer';
import { ValueProposition as VPType, setVP } from '../store/vpActions';
import { Views, changeView } from '../store/viewActions';
import { useTypedSelector } from '../store';

const ChangeVPView: React.FC = () => {
  const dispatch = useDispatch();
  const {player, vpState} = useTypedSelector(state => state);

  const handleBack = () => dispatch(changeView(Views.BUILD));

  const handlePickVP = (vp: VPType) => () => {
    dispatch(setVP(vp));
    dispatch(changeView(Views.HOME));
  }

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Blob size={6} color={green[300]} onClick={handleBack}>
                {"<--"}
            </Blob>
        </Box>
        <Box display="flex" justifyContent="center">
            <Blob size={32} color={lightBlue[300]}>
                <Typography variant="h5" color="inherit">{`Alright ${player}, what kind of smartwatch do you want to work on now?`}</Typography>
            </Blob>
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
