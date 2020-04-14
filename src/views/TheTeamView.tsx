import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import {changeView, Views} from '../store/viewActions';
import Blob from '../components/Blob';
import TeamMember from '../components/TeamMember';
import ViewContainer from '../components/ViewContainer';

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

const letsGetStartedText = `Alright.

A smartwatch to help parents
keep an eye on their kids.
Brilliant.

Let’s me introduce you to
your team. Meet Vicki and
Arthur.`;

const TheTeam: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNext = () => dispatch(changeView(Views.VALUE_PROPOSITION));

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={44} className={classes.preSpace}>
                {letsGetStartedText}
            </Blob>
        </Box>
        <Box pt={4}>
            <TeamMember img={"img"} name="Vicki" text="A coding wizard. Vicki can make magic in front of a computer. She’s absolutely essential"  />
            <TeamMember img={"img"} name="Arthur" text="3D printing, laser cutting, soldering - Arthur knows it all. There’s nothing he cannot build"  />
            <Blob color={green[300]} size={8} onClick={handleNext} className={classes.next}>
                Great
            </Blob>
        </Box>
    </ViewContainer>
  );
}

export default TheTeam;
