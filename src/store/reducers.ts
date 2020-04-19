import { Reducer } from "redux";
import { CHANGE_VIEW, ViewAction, Views } from './viewActions';
import { SET_PLAYER, PlayerAction } from './playerActions';
import { SET_VP, SetVPAction } from "./vpActions";
import { PICK_SUBJECT, PICK_DILEMMA, SubjectAction, DilemmaAction, getTasksForSubject } from './taskActions';
import { State, emptyState } from './';

export type ActionTypes = ViewAction | PlayerAction | SetVPAction | SubjectAction | DilemmaAction;

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
        case PICK_SUBJECT: {
            const decisions = getTasksForSubject(action.subject, state.tasks);
            return {
                ...state,
                view: Views.SUBJECT,
                subject: action.subject,
                decisions
            }
        }
        case PICK_DILEMMA: 
            return {
                ...state,
                currentTask: action.dilemma,
                decisions: undefined
            }
        default:
            return state;
    }
}

export default rootReducer;
