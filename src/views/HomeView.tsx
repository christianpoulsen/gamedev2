import React from 'react';
import { Box } from '@material-ui/core';
import { orange, pink, blue, green, purple, teal } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import InfoBar from '../components/InfoBar';
import ViewContainer from '../components/ViewContainer';
import { useDispatch } from 'react-redux';
import { changeView, Views } from '../store/viewActions';
import { pickSubject, TaskSubject, TaskSubjects } from '../store/taskActions';

import VpOption2 from '../assets/Option2.png';
import BigWhite, { SmallWhite } from '../components/BigWhite';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleBuildClick = () => dispatch(changeView(Views.BUILD));

  const handleTaskSubjectClick = (subject: TaskSubject) => () => dispatch(pickSubject(subject));

  return (
    <ViewContainer header={<InfoBar />}>
        <Box display="flex" justifyContent="center" alignItems="center">
            <img src="#" alt="img" />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="flex-end">
            <Blob color={green[400]} size={16} onClick={handleBuildClick}>
                <Box display="flex" flexDirection="column" >
                    <BigWhite>BUILD</BigWhite>
                    <img src={VpOption2} alt="img" style={{ height: 64 }} />
                </Box>
            </Blob>
            <Blob color={teal[200]} size={10} onClick={() => dispatch(changeView(Views.SHOP))}>
                <BigWhite>SHOP</BigWhite>
            </Blob>
            <Blob color={pink[100]} size={16} onClick={() => dispatch(changeView(Views.SALE))}>
                <Box display="flex" flexDirection="column">
                    <BigWhite>MAKE</BigWhite>
                    <BigWhite>FIRST</BigWhite>
                    <BigWhite>SALE</BigWhite>
                </Box>
            </Blob>
        </Box>
        <Box display="flex" flexDirection="column" flexWrap="wrap" justifyContent="space-between">
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Blob color={blue[200]} size={12} onClick={handleTaskSubjectClick(TaskSubjects.FUNDING)}>
                    <BigWhite>FUNDING</BigWhite>
                </Blob>
                <Blob color={purple[200]} size={12} onClick={handleTaskSubjectClick(TaskSubjects.TALK_TO_CUSTOMERS)}>
                    <Box display="flex" flexDirection="column">
                        <SmallWhite>TALK TO</SmallWhite>
                        <SmallWhite>CUSTOMERS</SmallWhite>
                    </Box>
                </Blob>
                <Blob color={green[200]} size={12} onClick={handleTaskSubjectClick(TaskSubjects.PRETOTYPE)}>
                    <BigWhite>PRETOTYPE</BigWhite>
                </Blob>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" mt={1}>
                <Blob color={pink[200]} size={12} onClick={handleTaskSubjectClick(TaskSubjects.SOCIALIZE)}>
                    <BigWhite>SOCIALIZE</BigWhite>
                </Blob>
                <Blob color={orange[200]} size={12} onClick={handleTaskSubjectClick(TaskSubjects.ANALYZE)}>
                <BigWhite>ANALYZE</BigWhite>
                </Blob>
                <Blob color={green[400]} size={12}>
                    <Box display="flex" flexDirection="column">
                        <BigWhite>ADMINI-</BigWhite>
                        <BigWhite>STRATIVE</BigWhite>
                    </Box>
                </Blob>
            </Box>           
        </Box>
    </ViewContainer>
  );
}

export default Home;
