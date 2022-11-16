import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

export const BaseCountdownButton = styled.button`
    width: 100%;
    display: flex;
    color: ${(props) => props.theme["gray-100"]};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1rem;
    gap: 0.5rem;
    font-weight: bold;
    border: 0;
    border-radius: 8px;
`;
export const StartCountdownButton = styled(BaseCountdownButton)`
    background-color: ${(props) => props.theme["green-500"]};
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    &:not(:disabled):hover {
        background-color: ${(props) => props.theme["green-700"]};
    }
`;
export const StopCountdownButton = styled(BaseCountdownButton)`
    background-color: ${(props) => props.theme["red-500"]};
    &:not(:disabled):hover {
        background-color: ${(props) => props.theme["red-700"]};
    }
`;
