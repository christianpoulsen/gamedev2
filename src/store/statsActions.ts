import { Action } from 'redux';
import { Consequence } from './taskActions';

// actions

export const UPDATE_STATS = "UPDATE_STATS";

// action types

export interface StatsAction extends Action {
    type: typeof UPDATE_STATS;
    cons: Partial<Consequence>
}

// action creators

export type UpdateStats = (cons: Partial<Consequence>) => StatsAction;
export const updateStats: UpdateStats = cons => ({
    type: UPDATE_STATS,
    cons
})