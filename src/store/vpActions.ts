import { Action } from 'redux';

import VpOption1 from '../assets/Option1.png';
import VpOption2 from '../assets/Option2.png';
import VpOption3 from '../assets/Option3.png';

// actions

export const SET_VP = "SET_VP";

// other constants

export interface ValueProposition {
    text: string;
    img: string;
}

export const initialVps: ValueProposition[] = [
    { text: "Build a smartwatch to help kids develop healthy habits", img: VpOption1 },
    { text: "Build a smartwatch to help parents keep an eye on their kids", img: VpOption2 },
    { text: "Build a smartwatch to help kids stay motivated and track fitness", img: VpOption3 },
];


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