import React from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { Consequence } from '../store/taskActions';
import { TimeCon, MoneyCon } from './Con';

const useStyles = makeStyles<Theme, {color: string}>(theme => ({
    box: {
        width: '90%',
        padding: theme.spacing(5, 2),
        margin: theme.spacing(2, 0),
        borderRadius: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        cursor: 'pointer',
        backgroundColor: ({ color }) => color,
        color: ({color}) => theme.palette.getContrastText(color),
    }
}))

interface OptionBoxProperties {
    text: string;
    color: string;
    cons?: Partial<Consequence>;
    onClick?: () => void;
    style?: React.CSSProperties;
}

export const OptionBox: React.FC<OptionBoxProperties> = ({ text, style, onClick, color, cons }) => {
    const classes = useStyles({color});

    return (
        <Box className={classes.box} style={style} onClick={onClick}>
            {text}
            {cons && (
                <>
                    <TimeCon days={cons?.days} />
                    <MoneyCon funding={cons?.funding} />
                </>
            )}
        </Box>
    )
}

export default OptionBox;
