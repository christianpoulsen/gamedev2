import React from 'react';
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { red } from '@material-ui/core/colors';

import ViewContainer from '../components/ViewContainer';
import { changeView, Views } from '../store/viewActions';
import BigWhite from '../components/BigWhite';
import Blob from '../components/Blob';
import { useTypedSelector } from '../store';

import SinkingShipPng from '../assets/Sinking_ship.webp';

export const GameOverView: React.FC = () => {
    const stats = useTypedSelector(state => state.stats);
    const dispatch = useDispatch();

    const color = red[500];
    const text = stats.days <= 0 
                    ? "YOU DID NOT MANAGE TO SELL A SMARTWATCH WITHIN THE 1 YEAR. YOUR VENTURE IS SINKING AND YOUR COMPETITORS WON."
                        : "THE TEAMS LEVEL OF HAPPINESS HAVE DROPPED LIKE A ROCK, YOUR CO-FOUNDERS LEFT AND YOUR VENTURE IS SINKING."

    return (
        <ViewContainer >
        <Box display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
            <Box fontSize={32} color={color} textAlign="center" fontWeight="bold">
                {`GAME OVER`}
            </Box>
            <Box fontWeight="bold" fontSize={16} borderRadius={12} whiteSpace="pre" textAlign="center" p={2} color="white" style={{ backgroundColor: color }}>
                {text}
            </Box>
            <Box>
                <img src={SinkingShipPng} alt="Sinking ship" style={{ width: 240 }}/>
            </Box>
            <Box display="flex" justifyContent="center">
                <Blob size={10} color={color} onClick={() => dispatch(changeView(Views.END))}>
                    <BigWhite>{`MOVE\nON`}</BigWhite>
                </Blob>
            </Box>
        </Box>
    </ViewContainer>
    )
}

export default GameOverView;
