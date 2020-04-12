import { createStore, PreloadedState } from 'redux';
import { View, Views } from './viewActions';
import { ValueProposition, emptyVP } from './vpActions';
import rootReducer from './reducers';

export interface State {
    view: View;
    player: string;
    vp: ValueProposition;
}

export const emptyState: State = {
    view: Views.WELCOME,
    player: "",
    vp: emptyVP,
}

export const configureStore = (preLoadedState?: PreloadedState<State>) =>{
    
    const store = createStore(rootReducer, preLoadedState);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store;
}

export default configureStore();
