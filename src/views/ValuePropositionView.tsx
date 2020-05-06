import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import Blob from '../components/Blob';
import Option from '../components/Option';
import ViewContainer from '../components/ViewContainer';
import { ValueProposition as VPType, setVP } from '../store/vpActions';
import { Views, changeView } from '../store/viewActions';
import { useTypedSelector } from '../store';

const useStyles = makeStyles({
  preSpace: {
    '& div': {
        whiteSpace: 'pre',
    }
  }
})

const letsGetStartedText = (player: string) => `Well, Hello ${player}.
Let’s get started. You and your
team came up with this brilliant
idea.

A SMARTWATCH FOR KIDS.

But you are not sure exactly
which smartwatch to build.

Chose one:`;

const ValueProposition: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {player, vpState: { vps }} = useTypedSelector(state => state);

  const handlePickVP = (vp: VPType) => () => {
    dispatch(setVP(vp));
    dispatch(changeView(Views.THE_TEAM));
  }

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={36} className={classes.preSpace}>
                {letsGetStartedText(player)}
            </Blob>
        </Box>
        <Box>
          {vps.map((vp, i) => (
            <Option key={i} index={i+1} img={vp.img} text={vp.text} onClick={handlePickVP(vp)} />
          ))}
        </Box>
    </ViewContainer>
  );
}

export default ValueProposition;
