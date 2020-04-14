import React from 'react';
import { Task } from '../../store/taskActions';

interface TaskViewProps {
    task: Task;
}

export const TaskView: React.FC<TaskViewProps> = () => {
    return (
        <div />
    );
}

export default TaskView;
