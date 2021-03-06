import { Action } from 'redux';

// actions

export const CHANGE_VIEW = "CHANGE_VIEW";

// other constants

export interface ViewTypes {
    readonly WELCOME: "WELCOME";
    readonly THE_TEAM: "THE_TEAM";
    readonly VALUE_PROPOSITION: "VALUE_PROPOSITION";
    readonly REMEMBER_THIS: "REMEMBER_THIS";
    readonly HOME: "HOME";
    readonly BUILD: "BUILD";
    readonly SUBJECT: "SUBJECT";
    readonly CHANGE_VP: "CHANGE_VP";
    readonly END: "END";
    readonly SALE: "SALE";
    readonly CONGRATZ: "CONGRATZ";
    readonly GAME_OVER: "GAME_OVER";
    readonly SHOP: "SHOP";
}

export const Views: ViewTypes = {
    WELCOME: "WELCOME",
    THE_TEAM: "THE_TEAM",
    VALUE_PROPOSITION: "VALUE_PROPOSITION",
    REMEMBER_THIS: "REMEMBER_THIS",
    HOME: "HOME",
    BUILD: "BUILD",
    SUBJECT: "SUBJECT",
    CHANGE_VP: "CHANGE_VP",
    END: "END",
    SALE: "SALE",
    CONGRATZ: "CONGRATZ",
    GAME_OVER: "GAME_OVER",
    SHOP: "SHOP",
}
export type View = keyof typeof Views;

// action types

export interface ViewAction extends Action {
    type: typeof CHANGE_VIEW;
    view: View
}

// action creators

export type ChangeView = (view: View) => ViewAction;
export const changeView: ChangeView = view => ({
    type: CHANGE_VIEW,
    view
})