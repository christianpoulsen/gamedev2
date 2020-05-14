import React, { useState } from 'react';
import { Box, Typography, InputBaseProps, TextField, makeStyles } from '@material-ui/core';
import { green, blue, teal, lightGreen, orange } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import ViewContainer from '../components/ViewContainer';

import VerySadSmiley from '../assets/smileys/Smiley_2.svg';
import SadSmiley from '../assets/smileys/Smiley_3.svg';
import Smiley from '../assets/smileys/Smiley_5.svg';
import HappySmiley from '../assets/smileys/Smiley_7.svg';
import VeryHappySmiley from '../assets/smileys/Smiley_9.svg';

const useStyles = makeStyles(theme => ({
    smileys: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        '& img': {
            height: 48,
            width: 'auto',
            cursor: 'pointer',
        }
    }
}))

export const EndView: React.FC = () => {
    const [feedback, setFeedback] = useState("");
    const classes = useStyles();

    const handleChange: InputBaseProps['onChange'] = e => setFeedback(e.target.value);

    // eslint-disable-next-line no-restricted-globals
    const handlePlayAgain = () => location.reload();

    const handleSubmit = async () => {
        
        await fetch("https://gamedev2.netlify.app/.netlify/functions/send-email?feedback=" + feedback);
    }

    return (
        <ViewContainer >
            <Box display="flex" flexDirection="column" flexGrow={1} alignItems="center" justifyContent="space-between">
                <Box fontSize={32} fontWeight="bold" color={orange[500]} whiteSpace="pre" textAlign="center">
                    {`WHAT DO YOU\nTHINK?`}
                </Box>
                <Box p={2} borderRadius={12} whiteSpace="pre" fontWeight="bold" textAlign="center" color="white" style={{ backgroundColor: orange[500] }}>
                    {`Please share some feedback with us,\nso we can continue our journey\ndeveloping online teaching material for\nthe entrepreneurs of tomorrow`}
                </Box>
                <Box whiteSpace="pre" textAlign="center">
                    {`How was your experience\nplaying the game?`}
                </Box>
                <Box className={classes.smileys}>
                    <img src={VerySadSmiley} alt="Very sad smiley" />
                    <img src={SadSmiley} alt="Sad smiley" />
                    <img src={Smiley} alt="Neutral smiley" />
                    <img src={HappySmiley} alt="Happy smiley" />
                    <img src={VeryHappySmiley} alt="Very happy smiley" />
                </Box>
                <Box display="flex" flexDirection="column" >
                    <Box whiteSpace="pre" textAlign="center">
                        {`Please provide us with any\nfeedback you have`}
                    </Box>
                    <TextField value={feedback} onChange={handleChange} variant="outlined" multiline rows={5} />
                </Box>
                
                <Box display="flex" flexDirection="row" justifyContent="space-around" width="100%">
                    <Blob size={10} color={lightGreen[500]} onClick={handlePlayAgain}>
                        <Box fontWeight="bold" whiteSpace="pre">{`PLAY\nAGAIN`}</Box>
                    </Blob>
                </Box>
            </Box>
        </ViewContainer>
  );
}

export default EndView;
