import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { orange, pink, blue, green, purple } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import InfoBar from '../components/InfoBar';
import ViewContainer from '../components/ViewContainer';

const useStyles = makeStyles(theme => ({
    buttons: {
        '& > div': {
            paddingTop: theme.spacing(1),
        }
    }
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <ViewContainer header={<InfoBar />}>
        <Box display="flex" justifyContent="center" alignItems="center">
            <img src="#" alt="img" />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
            <Blob color={green[400]} size={16}>
                <Box>
                    <Typography>BUILD</Typography>
                    <img src="#" alt="img" />
                </Box>
            </Blob>
            <Blob color={pink[100]} size={16}>
                <Box>
                    <Typography>MAKE</Typography>
                    <Typography>FIRST</Typography>
                    <Typography>SALE</Typography>
                </Box>
            </Blob>
        </Box>
        <Box display="flex" flexDirection="column" flexWrap="wrap" justifyContent="space-between">
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Blob color={blue[200]} size={12} >
                    <Typography>FUNDING</Typography>
                </Blob>
                <Blob color={purple[200]} size={12}>
                    <Box>
                        <Typography>TALK TO</Typography>
                        <Typography>CUSTOMERS</Typography>
                    </Box>
                </Blob>
                <Blob color={green[200]} size={12}>
                    <Typography>PRETOTYPE</Typography>
                </Blob>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" mt={1}>
                <Blob color={pink[200]} size={12}>
                    <Typography>SOCIALIZE</Typography>
                </Blob>
                <Blob color={orange[200]} size={12}>
                <Typography>ANALYZE</Typography>
                </Blob>
                <Blob color={green[400]} size={12}>
                    <Typography>ADMINISTRATIVE</Typography>
                </Blob>
            </Box>           
        </Box>
    </ViewContainer>
  );
}

export default Home;
