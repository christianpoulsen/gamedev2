import React from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { Consequence } from '../store/taskActions';
import { TimeCon, MoneyCon } from './Con';

const useStyles = makeStyles<Theme, {color: string; disabled: boolean}>(theme => ({
    box: {
        width: '90%',
        padding: theme.spacing(3, 2),
        marginTop: theme.spacing(1),
        borderRadius: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        cursor: ({disabled}) => disabled ? 'default' : 'pointer',
        backgroundColor: ({ color }) => color,
        opacity: ({disabled}) => disabled ? 0.5 : 1,
        color: ({color}) => theme.palette.getContrastText(color),
    }
}))

interface OptionBoxProperties {
    text: string;
    color: string;
    cons?: Partial<Consequence>;
    onClick?: () => void;
    style?: React.CSSProperties;
    disabled?: boolean;
}

export const OptionBox: React.FC<OptionBoxProperties> = ({ text, style, onClick, color, cons, disabled = false }) => {
    const classes = useStyles({color, disabled});

    return (
        <Box className={classes.box} style={style} onClick={disabled ? undefined : onClick}>
            {text}
            {cons && (
                <Box display="flex" flexDirection="row" justifyContent="space-around">
                    <TimeCon days={cons?.days} />
                    <MoneyCon funding={cons?.funding} />
                </Box>
            )}
        </Box>
    )
}

export default OptionBox;
