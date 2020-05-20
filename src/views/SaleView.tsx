import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, makeStyles } from '@material-ui/core';
import getRandomMUIColor from '../helpers/getRandomMUIColor';
import { useTypedSelector } from '../store';
import OptionBox from '../components/OptionBox';
import Blob from '../components/Blob';
import { pink } from '@material-ui/core/colors';
import ViewContainer from '../components/ViewContainer';
import InfoBar from '../components/InfoBar';
import { BackButton } from '../components/BackButton';
import BigWhite from '../components/BigWhite';
import { changeView, Views } from '../store/viewActions';
import { updateStats } from '../store/statsActions';

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

export const SaleView: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const builtLevel = useTypedSelector(state => state.builtLevel);
    const vpState = useTypedSelector(state => state.vpState);
    const [selled, setSelled] = useState(false);

    const ready = builtLevel >= 4 && !selled;

    const handleSell = () => {
        console.log(vpState)
        if (vpState.currentVP?.id === vpState.rightVP.id) {
            dispatch(changeView(Views.CONGRATZ))
        } else {
            dispatch(updateStats({ days: -5 }))
            setSelled(true);
        }
    }

    return (
        <ViewContainer header={<InfoBar />} >
            <Box display="flex" flexDirection="column" justifyContent={ready ? "space-between" : selled ? "space-between" : "flex-start"} flexGrow={1}>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                    <BackButton color={pink[200]} onClick={() => dispatch(changeView(Views.HOME))} />
                    <Blob size={14} color={pink[200]}>
                        <BigWhite>{`MAKE\nFIRST\nSALE`}</BigWhite>
                    </Blob>
                    <div style={{ width: 48 }} />
                </Box>
                {ready && (
                    <>
                        <Box className={classes.question} style={{ borderColor: pink[200] }}>
                            {`You have now finished building a\nsmartwatch and you have the option\nto try sell through a retailer`}
                        </Box>
                        <Box>
                            <OptionBox cons={{ days: -5 }} color={pink[200]} text={`TRY SEE IF YOU CAN SELL\nA SMARTWATCH`} onClick={handleSell} />
                        </Box>
                    </>
                )}
                {!ready && !selled && (
                     <Box className={classes.question} style={{ borderColor: pink[200] }}>
                         {`You need to build your product\nbefore you can try to sell it`}
                    </Box>
                )}
                {selled && (
                    <>
                        <OptionBox color={pink[200]} text={`Unfortunately, no one wanted to buy\nyour smartwatch. The retailer tried\npushing it for 5 days without any luck.`} />
                        <Box display="flex" justifyContent="center">
                            <Blob size={10} color={pink[200]} onClick={() => dispatch(changeView(Views.HOME))}>
                                <BigWhite>{`I GET IT`}</BigWhite>
                            </Blob>
                        </Box>
                    </>
                )}
            </Box>
        </ViewContainer>
    );
}

export default SaleView;
