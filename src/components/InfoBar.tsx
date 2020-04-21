import React from 'react';
import { makeStyles, Theme, Box, Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import { useTypedSelector } from '../store';

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
            {happiness}
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

export default InfoBar;
