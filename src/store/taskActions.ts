import { Action } from 'redux';
import { State } from '.';

// actions

export const PICK_SUBJECT = "PICK_SUBJECT";
export const PICK_DILEMMA = "PICK_DILEMMA";

// other constants

export interface TaskTypes {
    readonly TASK: "TASK";
    readonly DILEMMA: "DILEMMA";
    readonly OPTION: "OPTION";
    readonly RESULT: "RESULT";
    readonly STATECHECK: "STATECHECK";
}
export const Tasks: TaskTypes = {
    TASK: "TASK",
    DILEMMA: "DILEMMA",
    OPTION: "OPTION",
    RESULT: "RESULT",
    STATECHECK: "STATECHECK",
}
export type TaskType = keyof TaskTypes;

export interface Task {
    id: string;
    text: string;
    dilemma: Dilemma;
    type: TaskTypes["TASK"];
}

export interface Dilemma {
    id: string;
    text: string;
    options: Option[];
    type: TaskTypes["DILEMMA"];
}

export interface Option {
    id: string;
    text: string;
    consequence: Consequence;
    next: Dilemma | StateCheck | Result;
    type: TaskTypes["OPTION"];
}

export interface Consequence {
    happiness: number;
    days: number;
    funding: number;
}

export interface CheckTypes {
    readonly REGISTERED_COMPANY: "REGISTERED_COMPANY";
    readonly RIGHT_VP: "RIGHT_VP";
}
export const SupportedChecks: CheckTypes = {
    REGISTERED_COMPANY: "REGISTERED_COMPANY",
    RIGHT_VP: "RIGHT_VP",
}
export type Check = keyof CheckTypes;

export interface StateCheck {
    id: string;
    check: Check;
    yes: Dilemma | Result;
    no: Dilemma | Result;
}

export interface Result {
    id: string;
    text: string;
    consequence: Consequence;
    type: TaskTypes["RESULT"];
}

export interface TaskSubjectTypes {
    readonly FUNDING: "FUNDING";
    readonly TALK_TO_CUSTOMERS: "TALK_TO_CUSTOMERS";
}
export const TaskSubjects: TaskSubjectTypes = {
    FUNDING: "FUNDING",
    TALK_TO_CUSTOMERS: "TALK_TO_CUSTOMERS",
}
export type TaskSubject = keyof TaskSubjectTypes;

// action types

export interface SubjectAction extends Action {
    type: typeof PICK_SUBJECT;
    subject: TaskSubject;
}

export interface DilemmaAction extends Action {
    type: typeof PICK_DILEMMA;
    dilemma: Dilemma;
}

// action creators

export type PickSubject = (subject: TaskSubject) => SubjectAction;
export const pickSubject: PickSubject = subject => ({
    type: PICK_SUBJECT,
    subject
})

export type PickDilemma = (dilemma: Dilemma) => DilemmaAction;
export const pickDilemma: PickDilemma = dilemma => ({
    type: PICK_DILEMMA,
    dilemma
}) 

// helpers

export const getTasksForSubject = (subject: TaskSubject, taskMap: State["tasks"]) => {
    switch (subject) {
        case TaskSubjects.FUNDING:
            return taskMap.funding;
        case TaskSubjects.TALK_TO_CUSTOMERS:
            return taskMap.talkToCustomers;
        default:
            return [];
    }
}