import { createStore, PreloadedState } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { View, Views } from './viewActions';
import { ValueProposition, emptyVP } from './vpActions';
import { Task, Dilemma, Result, TaskSubject } from './taskActions';
import rootReducer from './reducers';
import * as Trees from './decisionTrees';

console.log(Trees.dataTree);

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
    stats: {
        happiness: number;
        days: number;
        funding: number;
    }
}

export const emptyState: State = {
    view: Views.WELCOME,
    player: "",
    vp: emptyVP,
    tasks: {
        funding: Trees.dataTree,
        talkToCustomers: [],
    },
    subject: undefined,
    decisions: undefined,
    currentTask: undefined,
    stats: {
        happiness: 100,
        days: 365,
        funding: 0,
    }
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
