import React from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import Blob from '../components/Blob';
import { yellow } from '@material-ui/core/colors';
import ViewContainer from '../components/ViewContainer';
import BigWhite from '../components/BigWhite';
import { changeView, Views } from '../store/viewActions';
import FireworksPng from '../assets/Fireworks.webp';


export const CongratzView: React.FC = () => {
    const dispatch = useDispatch();

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
                    <img src={FireworksPng} alt="Fireworks" style={{ width: 240 }}/>
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
