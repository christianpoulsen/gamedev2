import React from 'react';
import { teal } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import ViewContainer from '../components/ViewContainer';
import InfoBar from '../components/InfoBar';
import BackHeader from '../components/BackHeader';
import Blob from '../components/Blob';
import BigWhite from '../components/BigWhite';

import { changeView, Views } from '../store/viewActions';
import { initialShopOptions, ShopOption, buyThing } from '../store/shopActions';
import { useTypedSelector } from '../store';
import { Box, makeStyles } from '@material-ui/core';
import OptionBox from '../components/OptionBox';
import { updateStats } from '../store/statsActions';

const useStyles = makeStyles(theme => ({
    shopOption: {
        display: "flex",
        flexDirection: "row",
    },
    shopOptionImg: {
        display: "flex",
        alignItems: "center",
        paddingRight: theme.spacing(1),
        width: theme.spacing(10),
        '& img': {
            height: theme.spacing(8),
        }
    }
}))


export const ShopView: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const bought = useTypedSelector(state => state.bought);

    const handleBuy = (shopOption: ShopOption) => () => {
        dispatch(buyThing(shopOption.id));
        dispatch(updateStats(shopOption.cons))
    }

    return (
        <ViewContainer header={<InfoBar />}>
            <BackHeader 
                color={teal[200]} 
                header={
                    <Blob color={teal[200]} size={10}>
                        <BigWhite>SHOP</BigWhite>
                    </Blob>
                } 
                onBack={() => dispatch(changeView(Views.HOME))}
            />
            {initialShopOptions.map(so => (
                <Box className={classes.shopOption}>
                    <Box className={classes.shopOptionImg}>
                        <img src={so.img} alt={so.id.toLocaleLowerCase() + "image"}  />
                    </Box>
                    <OptionBox 
                        text={so.text} 
                        color={teal[200]} 
                        cons={so.cons} 
                        style={{ fontSize: 14 }} 
                        disabled={bought[so.id]}
                        onClick={handleBuy(so)}
                    />
                </Box>
            ))}
        </ViewContainer>
    )
}

export default ShopView;
