import React, { useState, useRef } from 'react';
import { Box } from '@material-ui/core';

import MutedPng from '../assets/muted.png';
import UnmutedPng from '../assets/unmuted.png';

import ArpBounce from '../assets/music/Arp_Bounce.mp3';
import RainbowForest from '../assets/music/Rainbow_Forest.mp3';
import RobotBoogie from '../assets/music/Robot_Boogie.mp3';
import SneakyBusiness from '../assets/music/Sneaky_Business.mp3';
import SunshineSamba from '../assets/music/Sunshine_Samba.mp3';
import TwirlyTops from '../assets/music/Twirly_Tops.mp3';


const MusicToggle: React.FC = () => {
    const [muted, setMute] = useState(true);
    const [counter, setCounter] = useState(0);
    const audioFiles = [ArpBounce, RainbowForest, RobotBoogie, SneakyBusiness, SunshineSamba, TwirlyTops];
    const audioRef = useRef(new Audio(audioFiles[counter]));

    const handleLoop = () => {
        const newCounter = counter === (audioFiles.length - 1) ? 0 : counter + 1;
        setCounter(newCounter);

        audioRef.current.src = audioFiles[newCounter];
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
    }
    audioRef.current.onended = handleLoop;

    const handleToggle = () => {
        if (muted) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setMute(!muted);
    }

    return (
        <Box style={{ cursor: "pointer" }}>
            <img src={muted ? MutedPng : UnmutedPng} alt="Mute icon" onClick={handleToggle}/>
        </Box>
    );
}

export default MusicToggle;
