import React from 'react';
import { makeStyles, Box, Typography, BoxProps } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import InfoBar from '../components/InfoBar';
import ViewContainer from '../components/ViewContainer';
import { useTypedSelector } from '../store';
import { changeView, Views } from '../store/viewActions';
import { useDispatch } from 'react-redux';
import BigWhite, { SmallWhite } from '../components/BigWhite';
import { BackButton } from '../components/BackButton';
import { MoneyCon, TimeCon } from '../components/Con';
import { build } from '../store/buildActions';

import VpOption2 from '../assets/Option2.png';

const useStyles = makeStyles(theme => ({
    transparentDiv: {
        width: theme.spacing(14),
    },
    vp: {
        textAlign: "center",
    }
}));

const Build: React.FC = () => {
  const classes = useStyles();
  const vp = useTypedSelector(state => state.vpState.currentVP);
  const { stats, builtLevel, bought } = useTypedSelector(state => state);
  const dispatch = useDispatch();

  const handleBack = () => dispatch(changeView(Views.HOME));

  const handlePickNewVP = () => dispatch(changeView(Views.CHANGE_VP));

  const handleBuildClick = (funding: number, days: number) => {
      if ((stats.funding + funding) >= 0 && (stats.days + days > 0)) {
          dispatch(build({ happiness: 0, funding, days}))
      }
  }

  if (!vp) return <div/>;

  return (
    <ViewContainer header={<InfoBar />}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <BackButton color={green[300]} onClick={handleBack} />
            <Blob size={16} color={green[300]}>
                <Box display="flex" flexDirection="column" >
                    <BigWhite>BUILD</BigWhite>
                    <img src={VpOption2} alt="img" style={{ height: 64 }} />
                </Box>
            </Blob>
            <Blob size={14} color={green[300]} onClick={handlePickNewVP}>
                <Typography variant="body1">
                    <SmallWhite>
                        {"BUILD A\nDIFFERENT\nSMART-\nWATCH"}
                    </SmallWhite>
                </Typography>
            </Blob>
        </Box>
        <Typography variant="h5" className={classes.vp}>{vp.text}</Typography>
        <Box>
            <BuildBlob
                text={"SOURCE\nCOMPONENTS"}
                index={0}
                level={builtLevel}
                onClick={handleBuildClick}
                funding={-500}
                days={bought.COFFEE ? -27 : -30}
                boxProps={{
                    alignItems: "center"
                }}
            />
            <BuildBlob
                text={"MAKE\nHARDWARE"}
                index={1}
                level={builtLevel}
                onClick={handleBuildClick}
                funding={0}
                days={bought.SOLDERING ? -36 : -45}
                boxProps={{
                    alignItems: "center",
                    justifyContent: "flex-end",
                    mt: -6
                }}
            />
            <BuildBlob
                text={"WRITE CODE"}
                index={2}
                level={builtLevel}
                onClick={handleBuildClick}
                funding={0}
                days={bought.FRIDGE ? -18 : -30}
                boxProps={{
                    alignItems: "center",
                    mt: -6
                }}
            />
            <BuildBlob
                text={"TEST PRODUCT"}
                index={3}
                level={builtLevel}
                onClick={handleBuildClick}
                funding={0}
                days={-30}
                boxProps={{
                    alignItems: "center",
                    justifyContent: "flex-end",
                    mt: -6
                }}
            />
        </Box>
    </ViewContainer>
  );
}

interface BuildBlobProps {
    text: string;
    index: number;
    level: number;
    onClick: (funding: number, days: number) => void;
    funding: number;
    days: number;
    boxProps?: BoxProps;
}

const BuildBlob: React.FC<BuildBlobProps> = ({ text, index, level, onClick, funding, days, boxProps }) => {

    const handleClick = () => onClick(funding, days);

    const active = index === level;
    const done = index < level;

    return (
        <Box display="flex" {...boxProps} >
            <Blob size={14} color={active ? green[300] : green[200]} onClick={active ? handleClick : undefined}>
                <Box display="flex" flexDirection="column">
                    <SmallWhite>
                        {text}
                    </SmallWhite>
                    {!done && (
                        <>
                            <TimeCon days={days} />
                            <MoneyCon funding={funding} />
                        </>
                    )}
                </Box>
            </Blob>
        </Box>
    )
}

export default Build;
