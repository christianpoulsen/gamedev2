import React, { useState, useRef, createContext, FC } from 'react';

import ArpBounce from './assets/music/Arp_Bounce.mp3';
import RainbowForest from './assets/music/Rainbow_Forest.mp3';
import RobotBoogie from './assets/music/Robot_Boogie.mp3';
import SneakyBusiness from './assets/music/Sneaky_Business.mp3';
import SunshineSamba from './assets/music/Sunshine_Samba.mp3';
import TwirlyTops from './assets/music/Twirly_Tops.mp3';

export const MusicContext = createContext({
    muted: true,
    handleToggle: () => {},
})

const MusicProvider: React.FC = ({ children }) => {
    
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
        <MusicContext.Provider value={{ muted, handleToggle }}>
            {children}
        </MusicContext.Provider>
    )
}

export default MusicProvider;
