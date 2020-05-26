import React, { useContext } from 'react';
import { Box } from '@material-ui/core';

import MutedPng from '../assets/muted.webp';
import UnmutedPng from '../assets/unmuted.webp';

import { MusicContext } from '../MusicContext';

const MusicToggle: React.FC = () => {
    const { muted, handleToggle } = useContext(MusicContext)
    return (
        <Box style={{ cursor: "pointer" }}>
            <img src={muted ? MutedPng : UnmutedPng} alt="Mute icon" onClick={handleToggle}/>
        </Box>
    );
}

export default MusicToggle;
