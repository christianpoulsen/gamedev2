import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import IntroMusic from './assets/music/If_I_Had_a_Chicken.mp3';

import ArpBounce from './assets/music/Arp_Bounce.mp3';
import RainbowForest from './assets/music/Rainbow_Forest.mp3';
import RobotBoogie from './assets/music/Robot_Boogie.mp3';
import SneakyBusiness from './assets/music/Sneaky_Business.mp3';
import SunshineSamba from './assets/music/Sunshine_Samba.mp3';
import TwirlyTops from './assets/music/Twirly_Tops.mp3';

const BackgroundMusic: React.FC = () => {
    const audioRef = React.useRef<ReactAudioPlayer>(null);
    const audioFiles = [ArpBounce, RainbowForest, RobotBoogie, SneakyBusiness, SunshineSamba, TwirlyTops];
    const [counter, setCounter] = useState(-1);

    const handleEnded: ReactAudioPlayer["props"]["onEnded"] = () => {
        const newCounter = counter === (audioFiles.length - 1) ? 0 : counter + 1;
        setCounter(newCounter);

        if (audioRef.current !== null && audioRef.current.audioEl !== null) {
            ((audioRef.current.audioEl as unknown as React.RefObject<HTMLAudioElement>).current as HTMLAudioElement).src = audioFiles[newCounter];
            ((audioRef.current.audioEl as unknown as React.RefObject<HTMLAudioElement>).current as HTMLAudioElement).pause();
            ((audioRef.current.audioEl as unknown as React.RefObject<HTMLAudioElement>).current as HTMLAudioElement).load();
            ((audioRef.current.audioEl as unknown as React.RefObject<HTMLAudioElement>).current as HTMLAudioElement).play();
        }        
    }
    
    return (
        <ReactAudioPlayer
            ref={audioRef}
            src={IntroMusic}
            onEnded={handleEnded}
            autoPlay
        />
    )
}

export default BackgroundMusic;
