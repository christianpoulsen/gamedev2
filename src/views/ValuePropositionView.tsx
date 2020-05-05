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

const valuePropositions: VPType[] = [
  { text: "Build a smartwatch to help kids develop healthy habits", img: "img" },
  { text: "Build a smartwatch to help parents keep an eye on their kids", img: "img" },
  { text: "Build a smartwatch to help kids stay motivated and track fitness", img: "img" },
]

const ValueProposition: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const player = useTypedSelector(state => state.player);

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
          {valuePropositions.map((vp, i) => (
            <Option key={i} index={i+1} img={vp.img} text={vp.text} onClick={handlePickVP(vp)} />
          ))}
        </Box>
    </ViewContainer>
  );
}

export default ValueProposition;
