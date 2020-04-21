import { Reducer } from "redux";
import { CHANGE_VIEW, ViewAction, Views } from './viewActions';
import { SET_PLAYER, PlayerAction } from './playerActions';
import { SET_VP, SetVPAction } from "./vpActions";
import { PICK_SUBJECT, PICK_DILEMMA, PICK_OPTION, OK_RESULT, SubjectAction, DilemmaAction, OptionAction, ResultAction, getTasksForSubject } from './taskActions';
import { State, emptyState } from './';

export type ActionTypes = ViewAction | PlayerAction | SetVPAction | SubjectAction | DilemmaAction | OptionAction | ResultAction;

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
        case PICK_OPTION:
            return {
                ...state,
                stats: {
                    happiness: state.stats.happiness + action.option.consequence.happiness,
                    days: state.stats.days - action.option.consequence.days,
                    funding: state.stats.funding + action.option.consequence.funding,
                },
                currentTask: action.next,
            }
        case OK_RESULT:
            return {
                ...state,
                stats: {
                    happiness: state.stats.happiness + action.consequence.happiness,
                    days: state.stats.days - action.consequence.days,
                    funding: state.stats.funding + action.consequence.funding,
                },
                currentTask: undefined,
                subject: undefined,
                view: Views.HOME,
            }
        default:
            return state;
    }
}

export default rootReducer;
