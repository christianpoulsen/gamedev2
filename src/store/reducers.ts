import { Reducer } from "redux";
import { CHANGE_VIEW, ViewAction, Views } from './viewActions';
import { SET_PLAYER, PlayerAction } from './playerActions';
import { SET_VP, SetVPAction } from "./vpActions";
import { PICK_SUBJECT, PICK_DILEMMA, PICK_OPTION, OK_RESULT, SubjectAction, DilemmaAction, OptionAction, ResultAction, getTasksForSubject, SupportedChecks, TaskSubjects } from './taskActions';
import { State, initialState } from './';

export type ActionTypes = ViewAction | PlayerAction | SetVPAction | SubjectAction | DilemmaAction | OptionAction | ResultAction;

export const rootReducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
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
            const fullfillsFoundersPrerequisites = 
                currentVp !== undefined && 
                    state.prerequisiteState.foundersFundingPickCount !== 2 && 
                        !state.tasks.funding.find(task => task.id === state.prerequisiteState.foundersFunding.id) &&
                            !state.vpState.previouslyPickedVps.find(vp => vp.text === action.vp.text);
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    funding: fullfillsFoundersPrerequisites ? [ state.prerequisiteState.foundersFunding, ...state.tasks.funding] : state.tasks.funding,
                },
                vpState: {
                    ...state.vpState,
                    currentVP: action.vp,
                    rightVP: currentVp === undefined ? state.vpState.vps.filter(vp => vp.text !== action.vp.text)[Math.floor(Math.random() * 1)] : state.vpState.rightVP,
                    previouslyPickedVps: [action.vp, ...state.vpState.previouslyPickedVps],
                },
                checks: {
                    ...state.checks,
                    [SupportedChecks.RIGHT_VP]: action.vp.text === state.vpState.rightVP?.text
                }
            }
        }
        case PICK_SUBJECT: {
            const decisions = getTasksForSubject(action.subject, state.tasks);
            const subject = action.subject === TaskSubjects.TALK_TO_CUSTOMERS ? "TALK TO\nCUSTOMERS" : action.subject;
            return {
                ...state,
                view: Views.SUBJECT,
                subject,
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
