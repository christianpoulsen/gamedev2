import { Action } from 'redux';
import { State } from '.';

// actions

export const PICK_DECISION = "PICK_DECISION";

// other constants

export interface TaskTypes {
    readonly TASK: "TASK";
    readonly DILEMMA: "DILEMMA";
    readonly RESULT: "RESULT";
}
export const Tasks: TaskTypes = {
    TASK: "TASK",
    DILEMMA: "DILEMMA",
    RESULT: "RESULT",
}
export type TaskType = keyof TaskTypes;

export interface Task {
    name: string;
    dilemma: Dilemma;
    type: TaskTypes["TASK"];
}

export interface Dilemma {
    text: string;
    options: Option[];
    type: TaskTypes["DILEMMA"];
}

export interface Option {
    text: string;
    consequence: unknown;
    next: Dilemma | StateCheck | Result;
}

export interface ConditionTypes {
    readonly REGISTERED_COMPANY: "REGISTERED_COMPANY";
    readonly RIGHT_VP: "RIGHT_VP";
}
export type Condition = keyof ConditionTypes;

export interface StateCheck {
    condition: Condition;
    yes: Dilemma | Result;
    no: Dilemma | Result;
}

export interface Result {
    text: string;
    consequence: unknown;
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

export interface DecisionAction extends Action {
    type: typeof PICK_DECISION;
    subject: TaskSubject;
}

// action creators

export type PickDecision = (subject: TaskSubject) => DecisionAction;
export const pickDecision: PickDecision = subject => ({
    type: PICK_DECISION,
    subject
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