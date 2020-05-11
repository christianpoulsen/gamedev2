import { createStore, PreloadedState } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { View, Views } from './viewActions';
import { ValueProposition, initialVps } from './vpActions';
import { Task, Dilemma, Result, TaskSubject, SupportedChecks } from './taskActions';
import rootReducer from './reducers';

import { fundingTasks, socializeTasks,analyzeTasks, pretotypeTasks, talkToCustomersTasks } from '../data';

export interface State {
    view: View;
    player: string;
    vpState: {
        currentVP?: ValueProposition;
        rightVP: ValueProposition;
        vps: ValueProposition[];
        previouslyPickedVps: ValueProposition[];
    },
    tasks: {
        funding: Task[];
        talkToCustomers: Task[];
        socialize: Task[];
        pretotype: Task[];
        analyze: Task[];
    };
    subject?: TaskSubject | "TALK TO\nCUSTOMERS";
    decisions?: Task[];
    currentTask?: Task | Dilemma | Result;
    stats: {
        happiness: number;
        days: number;
        funding: number;
    },
    checks: {
        [SupportedChecks.REGISTERED_COMPANY]: boolean;
        [SupportedChecks.RIGHT_VP]: boolean;
    },
    prerequisiteState: {
        foundersFunding: Task;
        foundersFundingPickCount: number;
        fffFunding: Task
    },
    builtLevel: number;
}

export const initialState: State = {
    view: Views.WELCOME,
    player: "",
    vpState: {
        currentVP: undefined,
        rightVP: initialVps[Math.floor(Math.random() * (initialVps.length - 1))],
        vps: initialVps,
        previouslyPickedVps: [],
    },
    tasks: {
        funding: fundingTasks,
        talkToCustomers: talkToCustomersTasks,
        socialize: socializeTasks,
        pretotype: pretotypeTasks,
        analyze: analyzeTasks,
    },
    subject: undefined,
    decisions: undefined,
    currentTask: undefined,
    stats: {
        happiness: 100,
        days: 365,
        funding: 0,
    },
    checks: {
        [SupportedChecks.REGISTERED_COMPANY]: false,
        [SupportedChecks.RIGHT_VP]: false,
    },
    prerequisiteState: {
        foundersFunding: fundingTasks[0],
        foundersFundingPickCount: 0,
        fffFunding: fundingTasks[1],
    },
    builtLevel: 0
}

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;

export const configureStore = (preLoadedState?: PreloadedState<State>) =>{
    
    const store = createStore(rootReducer, preLoadedState);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store;
}

export default configureStore();
