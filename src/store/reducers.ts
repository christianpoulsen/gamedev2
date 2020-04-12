import { Reducer } from "redux";
import { CHANGE_VIEW, ViewAction } from './viewActions';
import { SET_PLAYER, PlayerAction } from './playerActions';
import { SET_VP, SetVPAction } from "./vpActions";
import { State, emptyState } from './';

export type ActionTypes = ViewAction | PlayerAction | SetVPAction;

export const rootReducer: Reducer<State, ActionTypes> = (state = emptyState, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.view
            }
        case SET_PLAYER:
            return {
                ...state,
                player: action.player,
            };
        case SET_VP:
            return {
                ...state,
                vp: action.vp,
            }
        default:
            return state;
    }
}

export default rootReducer;
