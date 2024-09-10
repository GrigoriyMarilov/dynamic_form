import {useDynamicFormStore} from "./useDynamicFormStore.ts";
import React from "react";

export const FormOptions = React.memo(() => {
    const addInput = useDynamicFormStore(state => state.addInput)
    const addCheckbox = useDynamicFormStore(state => state.addCheckbox)
    const addDropdown = useDynamicFormStore(state => state.addDropdown)
    return (
        <div className={"formOptionsBlock"}>
            <button onClick={addInput}>Добавить input</button>
            <button onClick={addCheckbox}>Добавить checkbox</button>
            <button onClick={addDropdown}>Добавить dropdown</button>
        </div>
    );
});


