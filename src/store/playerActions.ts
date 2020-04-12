import { Action } from 'redux';

// actions

export const SET_PLAYER = "SET_PLAYER";

// action types

export interface PlayerAction extends Action {
    type: typeof SET_PLAYER;
    player: string
}

// action creators

export type SetPlayer = (player: string) => PlayerAction;
export const setPlayer: SetPlayer = player => ({
    type: SET_PLAYER,
    player
})