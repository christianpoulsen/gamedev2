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
        case SET_VP: {
            const currentVp = state.vpState.currentVP
            let fundingTasks = state.tasks.funding;
            if (currentVp !== undefined && state.prerequisiteState.foundersFundingPickCount !== 2 && !state.vpState.previouslyPickedVps.find(vp => vp.text === action.vp.text)) {
                fundingTasks = [ state.prerequisiteState.foundersFunding, ...fundingTasks];
            }
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    funding: fundingTasks,
                },
                vpState: {
                    ...state.vpState,
                    currentVP: action.vp,
                    previouslyPickedVps: [action.vp, ...state.vpState.previouslyPickedVps],
                }
            }
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
        case PICK_DILEMMA: {
            const founders = state.prerequisiteState.foundersFunding;
            const founderCount = state.prerequisiteState.foundersFundingPickCount;
            const isFoundersFunding = action.dilemma.id === founders.dilemma.id;
            const foundersFundingPickCount = isFoundersFunding ? founderCount + 1 : founderCount;
            
            const fffFunding = state.prerequisiteState.fffFunding;
            const isFffFunding = action.dilemma.id === fffFunding.dilemma.id;

            const funding = state.tasks.funding;
            
            const fundingTasks = isFoundersFunding ? 
                funding.filter(task => task.id !== founders.id) : 
                    isFffFunding ? funding.filter(task => task.id !== fffFunding.id) : 
                        funding;
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    funding: fundingTasks,
                },
                currentTask: action.dilemma,
                decisions: undefined,
                foundersFundingPickCount,
            }
        }
        case PICK_OPTION:
            return {
                ...state,
                stats: {
                    happiness: state.stats.happiness + action.option.consequence.happiness,
                    days: state.stats.days + action.option.consequence.days,
                    funding: state.stats.funding + action.option.consequence.funding,
                },
                currentTask: action.next,
            }
        case OK_RESULT:
            return {
                ...state,
                stats: {
                    happiness: state.stats.happiness + action.consequence.happiness,
                    days: state.stats.days + action.consequence.days,
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
