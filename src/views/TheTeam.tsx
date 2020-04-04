import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import TeamMember from '../components/TeamMember';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: `calc(100% - ${theme.spacing(12)}px)`,
        padding: theme.spacing(4),
    },
    personBlob: {
        display: 'flex',
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
    <div className={classes.container}>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={44}>
                {letsGetStartedText}
            </Blob>
        </Box>
        <Box pt={4}>
            <TeamMember img={"img"} name="Vicki" text="A coding wizard. Vicki can make magic in front of a computer. She’s absolutely essential"  />
            <TeamMember img={"img"} name="Arthur" text="3D printing, laser cutting, soldering - Arthur knows it all. There’s nothing he cannot build"  />
        </Box>
    </div>
  );
}

export default TheTeam;
