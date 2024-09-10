import {v4} from "uuid";

export class DFInput {
    public type = "input";
    public id = v4()
    public value = ""
    public label = "label";

    public setValue(value: string) {
        return this.value = value
    }

    public setLabel(value: string) {
        return this.label = value
    }
}