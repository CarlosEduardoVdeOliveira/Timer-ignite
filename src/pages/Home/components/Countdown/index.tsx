/* eslint-disable prettier/prettier */

import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";

import { CountdownContainer, Separator } from "./styles";

export function Countdown() {
    const {
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrenceCycleAsFinished,
        setSecondsPassed,
    } = useContext(CyclesContext);

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    const currentSecond = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSecond / 60);

    const secondsAmount = currentSecond % 60;

    const minutes = String(minutesAmount).padStart(2, "0");
    const seconds = String(secondsAmount).padStart(2, "0");

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}: ${seconds}`;
        }
    }, [minutes, seconds, activeCycle]);

    useEffect(() => {
        let interval: number;
        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(
                    new Date(),
                    new Date(activeCycle.startDate)
                );
                if (secondsDifference >= totalSeconds) {
                    markCurrenceCycleAsFinished();
                    setSecondsPassed(totalSeconds);

                    clearInterval(interval);
                } else {
                    setSecondsPassed(secondsDifference);
                }
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [
        activeCycle,
        activeCycleId,
        totalSeconds,
        markCurrenceCycleAsFinished,
        setSecondsPassed,
    ]);
    return (
        <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownContainer>
    );
}
