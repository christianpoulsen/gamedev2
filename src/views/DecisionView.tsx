import React from 'react';
import { useTypedSelector, State } from '../store';
import { Tasks } from '../store/taskActions';
import DilemmaView from './decisionViews/DilemmaView';
import ResultView from './decisionViews/ResultView';
import ViewContainer from '../components/ViewContainer';
import RootView from './decisionViews/RootView';
import InfoBar from '../components/InfoBar';

export const DecisionView: React.FC = () => {
    const appState = useTypedSelector(state => state);

    const renderView = (state: State) => {
        const {subject, decisions, currentTask} = state;

        if (subject && decisions) {
            return <RootView subject={subject} decisions={decisions} />
        }

        if (!currentTask) {
            return <div />;
        }
        
        switch (currentTask.type) {
            case Tasks.DILEMMA:
                return <DilemmaView dilemma={currentTask} />;
            case Tasks.RESULT:
                return <ResultView result={currentTask} />;
        }
    }

    return (
        <ViewContainer header={<InfoBar />}>
            {renderView(appState)}
        </ViewContainer>
    )

}

export default DecisionView;
