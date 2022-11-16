/* eslint-disable prettier/prettier */

import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext);

    const { register } = useFormContext();

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                type="text"
                id="task"
                list="task-suggestions"
                placeholder="Dê um nome para o seu projeto"
                {...register("task")}
                disabled={!!activeCycle}
            />

            <datalist id="task-suggestions">
                <option value="Estudar o ignite" />
                <option value="Estudar javascript" />
                <option value="Estudar reactjs" />
                <option value="Estudar css" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={60}
                {...register("minutesAmount", { valueAsNumber: true })}
                disabled={!!activeCycle}
            />
            <span>minutos.</span>
        </FormContainer>
    );
}
