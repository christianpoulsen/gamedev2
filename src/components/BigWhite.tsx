import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    bigWhite: {
        fontSize: 18,
        fontWeight: 'bold',
        whiteSpace: 'pre',
        color: 'white',
    },
    smallWhite: {
        fontSize: 14,
        fontWeight: 'bold',
        whiteSpace: 'pre',
        color: 'white',
    }
}))

export const BigWhite: React.FC = ({ children }) => {
    const classes = useStyles();

    return <span className={classes.bigWhite}>{children}</span>
}

export const SmallWhite: React.FC = ({ children }) => {
    const classes = useStyles();
    return <span className={classes.smallWhite}>{children}</span>
}

export default BigWhite;
