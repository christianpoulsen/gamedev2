import React from 'react';
import { useDispatch } from 'react-redux';
import { Dilemma, Option, pickOption } from '../store/taskActions';
import { Box, makeStyles, Typography } from '@material-ui/core';
import getRandomMUIColor from '../helpers/getRandomMUIColor';
import fullfillsStateCheck from '../helpers/fullfillsStateCheck';
import isStateCheck from '../helpers/isStateCheck';
import { useTypedSelector } from '../store';
import OptionBox from '../components/OptionBox';
import Blob from '../components/Blob';
import { pink, yellow } from '@material-ui/core/colors';
import ViewContainer from '../components/ViewContainer';
import InfoBar from '../components/InfoBar';
import { BackButton } from '../components/BackButton';
import BigWhite, { SmallWhite } from '../components/BigWhite';
import { changeView, Views } from '../store/viewActions';

const useStyles = makeStyles(theme => ({
    item: {
        marginTop: theme.spacing(2),
        backgroundColor: getRandomMUIColor()[300],
        cursor: "pointer",
    },
    question: {
        display: 'flex',
        justifyContent: 'center',
        borderBlockWidth: 2,
        borderStyle: 'solid',
        borderRadius: theme.spacing(1),
        fontSize: 18,
        textAlign: 'center',
        padding: theme.spacing(3, 2),
        marginTop: theme.spacing(2),
    }
}))

export const CongratzView: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const builtLevel = useTypedSelector(state => state.builtLevel);
    const vpState = useTypedSelector(state => state.vpState);

    const color = yellow[700];

    return (
        <ViewContainer >
            <Box display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
                <Box fontSize={32} color={color} textAlign="center" fontWeight="bold">
                    {`YOU MADE YOUR\nFIRST SALE!`}
                </Box>
                <Box fontSize={32} color={color} textAlign="center" fontWeight="bold">
                    CONGRATULATIONS
                </Box>
                <Box fontWeight="bold" fontSize={16} borderRadius={12} whiteSpace="pre" textAlign="center" p={2} color="white" style={{ backgroundColor: color }}>
                    {`YOUR STARTUP IS HEADING\nFOR SUCCESS`}
                </Box>
                <Box display="flex" justifyContent="center">
                    <Blob size={10} color={color} onClick={() => dispatch(changeView(Views.END))}>
                        <BigWhite>{`MOVE\nON`}</BigWhite>
                    </Blob>
                </Box>
            </Box>
        </ViewContainer>
    );
}

export default CongratzView;
