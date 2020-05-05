import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

import { TaskSubject, Task, Dilemma, pickDilemma } from '../../store/taskActions';
import { changeView, Views } from '../../store/viewActions';
import Blob from '../../components/Blob';
import BackHeader from '../../components/BackHeader';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    subject: {
        paddingBottom: theme.spacing(1),
        fontSize: 18,
        fontWeight: 'bold',
    },
    box: {
        width: '100%',
        padding: theme.spacing(5, 0),
        margin: theme.spacing(2, 0),
        borderRadius: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}))

interface RootProps {
    subject: TaskSubject
    decisions: Task[];
}

export const RootView: React.FC<RootProps> = ({ subject, decisions }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleBack = () => dispatch(changeView(Views.HOME));

    const handleNext = (next: Dilemma) => () => dispatch(pickDilemma(next))

    return (
        <>
            <BackHeader className={classes.subject} onBack={handleBack}>
                <Blob size={12} color={blue[400]}>
                    {subject}
                </Blob>
                <div style={{width: 48}} />
            </BackHeader>
            
            <Typography>Options</Typography>
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" flexGrow={1}>
                {decisions.map(task => (
                    <Box key={task.id} className={classes.box} style={{backgroundColor: blue[400]}} onClick={handleNext(task.dilemma)}>
                        {task.text}
                    </Box>
                ))}
            </Box>
        </>
    );
}

export default RootView;
