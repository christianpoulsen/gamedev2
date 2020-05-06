import React from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme, {color: string}>(theme => ({
    box: {
        width: '100%',
        padding: theme.spacing(5, 0),
        margin: theme.spacing(2, 0),
        borderRadius: theme.spacing(1),
        display: 'flex',
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
    onClick?: () => void;
    style?: React.CSSProperties;
}

export const OptionBox: React.FC<OptionBoxProperties> = ({ text, style, onClick, color }) => {
    const classes = useStyles({color});

    return (
        <Box className={classes.box} style={style} onClick={onClick}>
            {text}
        </Box>
    )
}

export default OptionBox;
