/* eslint-disable prettier/prettier */
import produce from "immer";
import { DRAFTABLE } from "immer/dist/internal";
import { ActionTypes } from "./actions";

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CyclesState {
    cycles: Cycle[];
    activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            /*  return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id,
            }; */
            return produce(state, (draft) => {
                draft.cycles.push(action.payload.newCycle);
                draft.activeCycleId = action.payload.newCycle.id;
            });
        case ActionTypes.MARK_CURRENCE_CYCLE_AS_FINISHED: {
            /*  return {
                 ...state,
                 cycles: state.cycles.map((cycle) => {
                     if (cycle.id === state.activeCycleId) {
                         return {
                             ...cycle,
                             finishedDate: new Date(),
                         };
                     } else {
                         return cycle;
                     }
                 }),
                 activeCycleId: null,
             }; */
            const findCurrenceIndiceCycle = state.cycles.findIndex(
                (cycle) => cycle.id === state.activeCycleId
            );
            if (findCurrenceIndiceCycle < 0) {
                return state;
            }
            return produce(state, (draft) => {
                draft.activeCycleId = null;
                draft.cycles[findCurrenceIndiceCycle].finishedDate = new Date();
            });
        }
        case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
            /* return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                    if (cycle.id === state.activeCycleId) {
                        return {
                            ...cycle,
                            interruptedDate: new Date(),
                        };
                    } else {
                        return cycle;
                    }
                }),
                activeCycleId: null,
            }; */
            const findCurrenceIndiceCycle = state.cycles.findIndex(
                (cycle) => cycle.id === state.activeCycleId
            );
            if (findCurrenceIndiceCycle < 0) {
                return state;
            }
            return produce(state, (draft) => {
                draft.activeCycleId = null;
                draft.cycles[findCurrenceIndiceCycle].interruptedDate =
                    new Date();
            });
        }
        default:
            return state;
    }
}
