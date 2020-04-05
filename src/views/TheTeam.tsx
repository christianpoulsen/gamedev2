import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import TeamMember from '../components/TeamMember';
import ViewContainer from '../components/ViewContainer';

const useStyles = makeStyles(theme => ({
    next: {
        display: 'flex',
        justifyContent: 'center',
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

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={44}>
                {letsGetStartedText}
            </Blob>
        </Box>
        <Box pt={4}>
            <TeamMember img={"img"} name="Vicki" text="A coding wizard. Vicki can make magic in front of a computer. She’s absolutely essential"  />
            <TeamMember img={"img"} name="Arthur" text="3D printing, laser cutting, soldering - Arthur knows it all. There’s nothing he cannot build"  />
            <Blob color={green[300]} size={8} onClick={() => console.log("Great")} className={classes.next}>
                Great
            </Blob>
        </Box>
    </ViewContainer>
  );
}

export default TheTeam;
