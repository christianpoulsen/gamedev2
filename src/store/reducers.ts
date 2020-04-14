import { Reducer } from "redux";
import { CHANGE_VIEW, ViewAction } from './viewActions';
import { SET_PLAYER, PlayerAction } from './playerActions';
import { SET_VP, SetVPAction } from "./vpActions";
import { PICK_DECISION, DecisionAction, getTasksForSubject } from './taskActions';
import { State, emptyState } from './';

export type ActionTypes = ViewAction | PlayerAction | SetVPAction | DecisionAction;

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
        case PICK_DECISION: {
            const decisions = getTasksForSubject(action.subject, state.tasks);
            return {
                ...state,
                subject: action.subject,
                decisions
            }
        }
        default:
            return state;
    }
}

export default rootReducer;
