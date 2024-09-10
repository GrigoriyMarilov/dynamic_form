import {v4} from "uuid";

export class DFCheckbox {
    public type = "checkbox";
    public id = v4()
    public value = "false"

    constructor(
        public label: string = "label",
    ) {}
    public setValue(value: string){
        return this.value=value
    }
    public setLabel(value: string){
        return this.label=value
    }
}