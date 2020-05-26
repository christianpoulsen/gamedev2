import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import ArthurPng from '../assets/Arthur.webp';
import VickiPng from '../assets/Vicki.webp';
import AndyPng from '../assets/Andy.webp';
import SofiaPng from '../assets/Sofia.webp';

import ToolboxPng from '../assets/Toolbox.webp';
import DeskPng from '../assets/Desk.webp';
import LabSmallPng from '../assets/Lab_Small.webp';
import { useTypedSelector } from '../store';

export const HomeImage: React.FC = () => {

    const player = useTypedSelector(state => state.player);

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
            <KidNDesk kid={VickiPng} stuff={LabSmallPng} />
            <KidNDesk kid={player === "Andy" ? AndyPng : SofiaPng} />
            <KidNDesk kid={ArthurPng} stuff={ToolboxPng} />
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    kid: {
        height: theme.spacing(8),
    },
    desk: {
        height: theme.spacing(12),
        marginTop: theme.spacing(-3),
    },
    stuff: {
        position: "absolute",
        height: theme.spacing(6),
        marginTop: theme.spacing(-7),
        marginLeft: theme.spacing(-4),
        WebkitMarginBefore: `${theme.spacing(-3.5)}px`,
        WebkitMarginStart: `${theme.spacing(-2.5)}px`,
    }
}))

const KidNDesk: React.FC<{kid: string, stuff?: string}> = ({kid, stuff}) => {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <img src={kid} alt="Kid" className={classes.kid} />
            <img src={DeskPng} alt="desk" className={classes.desk} />
            {!!stuff && <img src={stuff} alt="Desk stuff" className={classes.stuff} />}
        </Box>
    )
}

export default HomeImage;
