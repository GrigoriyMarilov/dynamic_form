import {DFInput} from "./classes/DFInput.ts";
import {DFCheckbox} from "./classes/DFCheckbox.ts";
import {DFDropdown} from "./classes/DFDropdown.ts";

export type FormComponent = DFInput | DFCheckbox | DFDropdown
export type FormData = {
    id: string;
    type: string;
    label: string;
    value: string;
}