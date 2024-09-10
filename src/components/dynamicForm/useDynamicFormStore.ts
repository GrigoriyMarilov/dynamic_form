import {FormComponent} from "./types.ts";
import {DFInput} from "./classes/DFInput.ts";
import {DFCheckbox} from "./classes/DFCheckbox.ts";
import {DFDropdown} from "./classes/DFDropdown.ts";

import {create} from "zustand";

interface DynamicFormStore {
    formFields: FormComponent[],
    addInput: () => void,
    addCheckbox: () => void,
    addDropdown: () => void,
    deleteItem: (id: string)=>void
}

export const useDynamicFormStore = create<DynamicFormStore>((set, get) => ({
    formFields: [],

    addInput: () => {
        set({
            formFields: [...get().formFields, new DFInput()]
        })
    },
    addCheckbox: () => {
        set({
            formFields: [...get().formFields, new DFCheckbox()]
        })
    },
    addDropdown: () => {
        set({
            formFields: [...get().formFields, new DFDropdown(["option1", "option2"])]
        })
    },

    deleteItem: (id: string)=>{
        const itemId = [...get().formFields].findIndex(item=>item.id === id)

        if (itemId >= 0) {
            const newState = [
                ...get().formFields.slice(0, itemId),
                ...get().formFields.slice(itemId + 1),
            ];

            set({
                formFields: newState
            });
        }
    }
}));



