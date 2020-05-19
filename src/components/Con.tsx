import React from 'react';
import { makeStyles, Box, BoxProps } from '@material-ui/core';

import TimePng from '../assets/Time.webp';
import DollarPng from '../assets/Dollars.webp';

const useStyles = makeStyles(theme => ({
    conBox: {
        fontSize: theme.spacing(1.5),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
            height: theme.spacing(1.5),
            marginRight: theme.spacing(0.5),
        }
    }
}))

export const MoneyCon: React.FC<{ funding?: number }> = ({ funding }) => {
    if (!funding || funding === 0) return null;

    return <Con img={DollarPng} alt="Dollar icon" text={`${funding}$`} />
}

export const TimeCon: React.FC<{ days?: number }> = ({ days }) => {
    if (!days || days === 0) return null;

    return <Con img={TimePng} alt="Time icon" text={`${days} DAYS`} />
}

interface ConProps { 
    img: string; 
    alt: string;
    text: string; 
    boxProps?: BoxProps
}

export const Con: React.FC<ConProps> = ({ img, alt, text, boxProps}) => {
    const { conBox } = useStyles();

    return (
        <Box {...boxProps} className={conBox} >
            <img src={img} alt={alt} style={{ width: 12 }} />{` ${text}`}
        </Box>
    )
}

export default Con;
