import React, { useState } from 'react';
import { Box, Typography, InputBaseProps, TextField } from '@material-ui/core';
import { green, blue, teal, lightGreen } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import ViewContainer from '../components/ViewContainer';

export const EndView: React.FC = () => {
    const [feedback, setFeedback] = useState("");
    const [sentFeedback, setSentFeedback] = useState(false);

    const handleChange: InputBaseProps['onChange'] = e => setFeedback(e.target.value);

    // eslint-disable-next-line no-restricted-globals
    const handlePlayAgain = () => location.reload();

    const handleSubmit = async () => {
        
        await fetch("https://seriousentrepreneurshipgame.netlify.app/.netlify/functions/send-email?feedback=" + feedback);
        setSentFeedback(true);
    }

    return (
        <ViewContainer >
            <Box display="flex" flexDirection="column" flexGrow={1} alignItems="center" justifyContent="space-between">
                {sentFeedback ? (
                    <>
                        <Blob size={40} color={lightGreen[700]}>
                            <Typography variant="h3">THANK YOU FOR YOUR FEEDBACK!</Typography>
                        </Blob>
                        <Blob size={16} color={teal[500]} onClick={handlePlayAgain}>
                            <Typography>Play again</Typography>
                        </Blob>
                    </>
                ) : (
                    <>
                        <Blob size={20} color={green[400]}>
                            <Typography variant="h3">END</Typography>
                        </Blob>
                        <Box display="flex" flexDirection="column" >
                            <Typography variant="h6">Help us by sending us some feedback!</Typography>
                            <TextField value={feedback} onChange={handleChange} variant="outlined" multiline rows={5} />
                        </Box>
                        <Box display="flex" flexDirection="row" justifyContent="space-around" width="100%">
                            <Blob size={16} color={teal[500]} onClick={handlePlayAgain}>
                                <Typography>Play again</Typography>
                            </Blob>
                            <Blob size={16} color={blue[200]} onClick={handleSubmit}>
                                <Typography>Send feedback</Typography>
                            </Blob>
                        </Box>
                    </>
                )}
            </Box>
        </ViewContainer>
  );
}

export default EndView;
