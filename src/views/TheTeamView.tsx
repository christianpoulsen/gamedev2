import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import {changeView, Views} from '../store/viewActions';
import Blob from '../components/Blob';
import TeamMember from '../components/TeamMember';
import ViewContainer from '../components/ViewContainer';

import VickiPng from '../assets/Vicki.webp';
import ArthurPng from '../assets/Arthur.webp';
import { useTypedSelector } from '../store';

const useStyles = makeStyles(theme => ({
    next: {
        display: 'flex',
        justifyContent: 'center',
    },
    preSpace: {
        '& div': {
            whiteSpace: 'pre',
        }
    }
}));

const letsGetStartedText = (vpText?: string) => `Alright.

${vpText}

Let me introduce you to
your team. Meet Vicki and
Arthur.`;

const TheTeam: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const vp = useTypedSelector(state => state.vpState.currentVP)
  const handleNext = () => dispatch(changeView(Views.REMEMBER_THIS));

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={32} className={classes.preSpace}>
                <div style={{ width: 248, whiteSpace: "pre-line" }}>
                    {letsGetStartedText(vp?.text)}
                </div>
            </Blob>
        </Box>
        <Box>
            <TeamMember img={VickiPng} name="Vicki" text="A coding wizard. Vicki can make magic in front of a computer. She’s absolutely essential"  />
            <TeamMember img={ArthurPng} name="Arthur" text="3D printing, laser cutting, soldering - Arthur knows it all. There’s nothing he cannot build"  />
            <Blob color={green[300]} size={8} onClick={handleNext} className={classes.next}>
                Great
            </Blob>
        </Box>
    </ViewContainer>
  );
}

export default TheTeam;
