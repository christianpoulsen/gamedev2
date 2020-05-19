import React from 'react';

import Blob from './Blob';
import ArrowPng from '../assets/Arrow.webp';


interface BackButtonProperties {
    color: string;
    onClick: () => void;
}

export const BackButton: React.FC<BackButtonProperties> = ({ color, onClick }) => {
    return (
        <Blob size={6} color={color} onClick={onClick}>
                <img src={ArrowPng} alt="back arrow" style={{ width: 32 }}/>
        </Blob>
    )
}