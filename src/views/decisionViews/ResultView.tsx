import React from 'react';
import { Result, okResult} from '../../store/taskActions';
import { Box, Typography } from '@material-ui/core';
import getRandomMUIColor from '../../helpers/getRandomMUIColor';
import Blob from '../../components/Blob';
import { useDispatch } from 'react-redux';

interface ResultViewProps {
    result: Result;
}

export const ResultView: React.FC<ResultViewProps> = ({ result }) => {
    const dispatch = useDispatch();

    const handleOkClick = () => {
        dispatch(okResult(result.consequence));
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
            <Box display="flex" justifyContent="center">
                <Blob size={32} color={getRandomMUIColor()[300]}>
                    <Typography>{result.text}</Typography>
                </Blob>
            </Box>
            <Box display="flex" justifyContent="center">
                <Blob size={8} color={getRandomMUIColor()[300]} onClick={handleOkClick}>
                    <Typography>Ok</Typography>
                </Blob>
            </Box>
        </Box>
    );
}

export default ResultView;
