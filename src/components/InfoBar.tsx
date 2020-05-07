import React from 'react';
import { makeStyles, Theme, Box, Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import { useTypedSelector } from '../store';

import Smiley1 from '../assets/smileys/Smiley_1.svg';
import Smiley2 from '../assets/smileys/Smiley_2.svg';
import Smiley3 from '../assets/smileys/Smiley_3.svg';
import Smiley4 from '../assets/smileys/Smiley_4.svg';
import Smiley5 from '../assets/smileys/Smiley_5.svg';
import Smiley6 from '../assets/smileys/Smiley_6.svg';
import Smiley7 from '../assets/smileys/Smiley_7.svg';
import Smiley8 from '../assets/smileys/Smiley_8.svg';
import Smiley9 from '../assets/smileys/Smiley_9.svg';

const useStyles = makeStyles<Theme>(theme => ({
    bar: {
        backgroundColor: lightBlue[600],
        color: theme.palette.common.white,
        textAlign: 'center',
        padding: theme.spacing(0, 1, 1, 1),
    }
}));

interface InfoBarProps {
}

const InfoBar: React.FC<InfoBarProps> = ({ children }) => {
  const classes = useStyles();
  const { happiness, days, funding } = useTypedSelector(state => state.stats);

  return (
    <Box display="flex" justifyContent="space-around" className={classes.bar}>
        <Box display="flex" flexDirection="column" >
            <Typography>HAPPINESS</Typography>
            <img src={getSmileySvg(happiness)} alt="happiness smiley" style={{ height: 32 }}/>
        </Box>
        <Box display="flex" flexDirection="column" >
            <Typography>DAYS LEFT</Typography>
            {days}
        </Box>
        <Box display="flex" flexDirection="column" >
            <Typography>FUNDING</Typography>
            {funding} $
        </Box>
    </Box>
  )
}

const getSmileySvg = (happiness: number) => {
    let smiley = Smiley9;

    if (happiness < 20) {
        smiley = Smiley8;
    }
    if (happiness < 30) {
        smiley = Smiley7;
    }
    if (happiness < 40) {
        smiley = Smiley6;
    }
    if (happiness < 50) {
        smiley = Smiley5;
    }
    if (happiness < 60) {
        smiley = Smiley4;
    }
    if (happiness < 70) {
        smiley = Smiley3;
    }
    if (happiness < 80) {
        smiley = Smiley2;
    }
    if (happiness < 90) {
        smiley = Smiley1;
    }

    return smiley;
}

export default InfoBar;
