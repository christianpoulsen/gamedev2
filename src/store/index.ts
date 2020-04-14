import { createStore, PreloadedState } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { View, Views } from './viewActions';
import { ValueProposition, emptyVP } from './vpActions';
import { Task, Dilemma, Result, TaskSubject, TaskSubjects } from './taskActions';
import rootReducer from './reducers';
import * as Trees from './decisionTrees';

export interface State {
    view: View;
    player: string;
    vp: ValueProposition;
    tasks: {
        funding: Task[];
        talkToCustomers: Task[];
    };
    subject?: TaskSubject;
    decisions?: Task[];
    currentTask?: Task | Dilemma | Result;
}

export const emptyState: State = {
    view: Views.WELCOME,
    player: "",
    vp: emptyVP,
    tasks: {
        funding: Trees.funding,
        talkToCustomers: [],
    },
    subject: undefined,
    decisions: undefined,
    currentTask: undefined,
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
