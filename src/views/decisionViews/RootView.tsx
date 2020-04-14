import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import { TaskSubject, Task } from '../../store/taskActions';
import Blob from '../../components/Blob';

const useStyles = makeStyles(theme => ({
    subject: {
        textAlign: "center",
        paddingBottom: theme.spacing(8),
    }
}))

interface RootProps {
    subject: TaskSubject
    decisions: Task[];
}

export const RootView: React.FC<RootProps> = ({ subject, decisions }) => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h4" className={classes.subject}>{subject}</Typography>
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
