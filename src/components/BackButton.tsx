import React from 'react';

import Blob from './Blob';


interface BackButtonProperties {
    color: string;
    onClick: () => void;
}

export const BackButton: React.FC<BackButtonProperties> = ({ color, onClick }) => {
    return (
        <Blob size={6} color={color} onClick={onClick}>
                {"<--"}
        </Blob>
    )
}