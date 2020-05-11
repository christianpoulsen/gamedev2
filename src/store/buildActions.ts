import { Action } from 'redux';
import { Consequence } from './taskActions';

// actions

export const INCREASE_BUILT_LEVEL = "INCREASE_BUILT_LEVEL";

// other constants



// action types

export interface BuildAction extends Action {
    type: typeof INCREASE_BUILT_LEVEL;
    consequence: Consequence;
}

export type Build = (consequence: Consequence) => BuildAction;
export const build: Build = consequence => ({
    type: INCREASE_BUILT_LEVEL,
    consequence
})