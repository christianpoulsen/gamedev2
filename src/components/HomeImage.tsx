import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import ArthurPng from '../assets/Arthur.png';
import VickiPng from '../assets/VIcki.png';
import AndyPng from '../assets/Andy.png';
import SofiaPng from '../assets/Sofia.png';

import ToolboxPng from '../assets/Toolbox.png';
import DeskPng from '../assets/Desk.png';
import LabSmallPng from '../assets/Lab_Small.png';
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
