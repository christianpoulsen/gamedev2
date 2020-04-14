import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import { TaskSubject, Task } from '../../store/taskActions';
import { changeView, Views } from '../../store/viewActions';
import Blob from '../../components/Blob';
import BackHeader from '../../components/BackHeader';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    subject: {
        paddingBottom: theme.spacing(12),
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

    return (
        <>
            <BackHeader header={subject} className={classes.subject} onBack={handleBack} />
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" flexGrow={1}>
                {decisions.map(task => (
                    <Blob key={task.name} size={20} color={green[300]}>
                        {task.name}
                    </Blob>
                ))}
            </Box>
        </>
    );
}

export default RootView;
