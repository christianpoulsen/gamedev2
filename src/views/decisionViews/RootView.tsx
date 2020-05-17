import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

import { Task, Dilemma, pickDilemma } from '../../store/taskActions';
import { changeView, Views } from '../../store/viewActions';
import Blob from '../../components/Blob';
import BackHeader from '../../components/BackHeader';
import { useDispatch } from 'react-redux';
import { OptionBox } from '../../components/OptionBox';

const useStyles = makeStyles(theme => ({
    subject: {
        paddingBottom: theme.spacing(1),
        fontSize: 18,
        fontWeight: 'bold',
    },
}))

interface RootProps {
    subject: string;
    decisions: Task[];
}

export const RootView: React.FC<RootProps> = ({ subject, decisions }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleBack = () => dispatch(changeView(Views.HOME));

    const handleNext = (next: Dilemma) => () => dispatch(pickDilemma(next))

    const color = blue[400];

    return (
        <>
            <BackHeader className={classes.subject} color={color} onBack={handleBack}>
                <Blob size={15} color={color}>
                    {subject}
                </Blob>
                <div style={{width: 48}} />
            </BackHeader>
            
            <Typography>Options</Typography>
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" flexGrow={1}>
                {decisions.map(task => (
                    <OptionBox key={task.id} text={task.text} color={color} onClick={handleNext(task.dilemma)}/>
                ))}
            </Box>
        </>
    );
}

export default RootView;
