import React from 'react';
import { useTypedSelector } from '../store';
import { Tasks } from '../store/taskActions';
import TaskView from './decisionViews/TaskView';
import DilemmaView from './decisionViews/DilemmaView';
import ResultView from './decisionViews/ResultView';
import ViewContainer from '../components/ViewContainer';
import RootView from './decisionViews/RootView';
import InfoBar from '../components/InfoBar';

export const DecisionView: React.FC = () => {
    const {subject, decisions, currentTask} = useTypedSelector(state => state);

    const renderView = () => {

        if (subject && decisions) {
            return <RootView subject={subject} decisions={decisions} />
        }

        if (!currentTask) {
            return <div />;
        }
        
        switch (currentTask.type) {
            case Tasks.TASK:
                return <TaskView task={currentTask} />;
            case Tasks.DILEMMA:
                return <DilemmaView dilemma={currentTask} />;
            case Tasks.RESULT:
                return <ResultView result={currentTask} />;
        }
    }

    return (
        <ViewContainer header={<InfoBar />}>
            {renderView()}
        </ViewContainer>
    )

}

export default DecisionView;
