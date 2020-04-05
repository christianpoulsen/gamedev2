import React from 'react';
import { makeStyles, Theme, Box, Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';

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

  return (
    <Box display="flex" justifyContent="space-around" className={classes.bar}>
        <Box display="flex" flexDirection="column" >
            <Typography>HAPPINESS</Typography>
            :D
        </Box>
        <Box display="flex" flexDirection="column" >
            <Typography>DAYS LEFT</Typography>
            365
        </Box>
        <Box display="flex" flexDirection="column" >
            <Typography>FUNDING</Typography>
            0 $
        </Box>
    </Box>
  )
}

export default InfoBar;
