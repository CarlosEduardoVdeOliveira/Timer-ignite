/* eslint-disable prettier/prettier */
import { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    MARK_CURRENCE_CYCLE_AS_FINISHED = "MARK_CURRENCE_CYCLE_AS_FINISHED",
    INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
}

export function markCurrenceCycleAsFinishedAction() {
    return {
        type: ActionTypes.MARK_CURRENCE_CYCLE_AS_FINISHED,
    };
}
export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        },
    };
}
export function interruptCurrentCycleAction() {
    return {
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    };
}
