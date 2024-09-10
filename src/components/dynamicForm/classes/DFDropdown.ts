import {v4} from "uuid"

export class DFDropdown {
    public type = "dropdown";
    public id = v4()
    public value: string;
    public label = "label";

    constructor(
        public options: string[]
    ) {
        this.value = options[0]
    }

    public setValue(value: string) {
        return this.value = value
    }

    public setLabel(value: string) {
        return this.label = value
    }
}