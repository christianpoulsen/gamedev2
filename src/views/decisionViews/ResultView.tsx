import React from 'react';
import { Result, okResult} from '../../store/taskActions';
import { Box, Typography, makeStyles } from '@material-ui/core';
import getRandomMUIColor from '../../helpers/getRandomMUIColor';
import Blob from '../../components/Blob';
import { useDispatch } from 'react-redux';
import OptionBox from '../../components/OptionBox';

import DollarPng from '../../assets/Dollars.png';
import SmileySvg from '../../assets/smileys/Smiley_6.svg'

const useStyles = makeStyles(theme => ({
    consItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        '& img': {
            height: theme.spacing(6),
            width: 'auto',
            padding: theme.spacing(1)
        },
        '& svg': {
            height: theme.spacing(6),
            width: 'auto',
            padding: theme.spacing(1)
        }
    }
}))

interface ResultViewProps {
    result: Result;
}

export const ResultView: React.FC<ResultViewProps> = ({ result }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleOkClick = () => {
        dispatch(okResult(result.consequence));
    }

    const {happiness, days, funding} = result.consequence;

    const color = getRandomMUIColor()[300];

    return (
        <Box display="flex" flexDirection="column" justifyContent="flex-end" flexGrow={1}>
            <OptionBox text={result.text} color={color} />
            <Box display="flex" flexDirection="row" justifyContent="center" p={4}>
                {happiness !== 0 && (
                    <Box className={classes.consItem} >
                        <img src={SmileySvg} alt="smiley" />
                        {happiness}
                    </Box>
                )}
                {funding !== 0 && (
                    <Box className={classes.consItem}>
                        <img src={DollarPng} alt="dollars" />
                        {funding < 0 ? "-" : "+"}${funding}
                    </Box>
                )}
            </Box>
            <Box display="flex" justifyContent="center">
                <Blob size={10} color={color} onClick={handleOkClick}>
                    <Typography><b>I GET IT</b></Typography>
                </Blob>
            </Box>
        </Box>
    );
}

export default ResultView;
