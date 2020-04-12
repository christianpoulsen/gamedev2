import { Action } from 'redux';

// actions

export const SET_VP = "SET_VP";

// other constants

export interface ValueProposition {
    text: string;
    img: string;
}

export const emptyVP = {
    text: "",
    img: "img",
}

// action types

export interface SetVPAction extends Action {
    type: typeof SET_VP;
    vp: ValueProposition;
}

// action creators

export type SetVP = (vp: ValueProposition) => SetVPAction;
export const setVP: SetVP = vp => ({
    type: SET_VP,
    vp
})