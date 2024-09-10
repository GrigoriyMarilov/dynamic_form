import {DFInput} from "./classes/DFInput.ts";
import {DFCheckbox} from "./classes/DFCheckbox.ts";
import {DFDropdown} from "./classes/DFDropdown.ts";
import {FormComponent} from "./types.ts";
import React, {useState} from "react";
import {useDynamicFormStore} from "./useDynamicFormStore.ts";

export const FormField = ({component}: { component: FormComponent }) => {
    const [value, setValue] = useState(component.value)
    const [label, setLabel] = useState(component.label)
    const deleteItem = useDynamicFormStore(state => state.deleteItem)
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (component instanceof DFCheckbox && event.target.type === "checkbox") {
            component.setValue(event.target.checked.toString());
            setValue(event.target.checked.toString());
        } else {
            component.setValue(event.target.value);
            setValue(event.target.value);
        }
    }
    const labelHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        component.setLabel(event.target.value)
        setLabel(event.target.value)
    }
    const handleDelete = () => {
        deleteItem(component.id)

    }
    return (
        <div className={'field'}>
            <input name={"label"} type="text" value={label} onChange={labelHandler}/>


            {/*инпут*/}
            {
                component instanceof DFInput &&
                <input name={"value"} type="text" value={value} onChange={inputHandler}/>
            }
            {/*чекбокс*/}
            {
                component instanceof DFCheckbox &&
                <input name={"value"} checked={value === "true"} type="checkbox" value={value} onChange={inputHandler}/>
            }
            {/*селект*/}
            {
                component instanceof DFDropdown && <select name={"value"} value={value} onChange={inputHandler}>
                    {
                        component.options.map(value => <option value={value}>{value}</option>)
                    }
                </select>
            }

            <button type={"button"} onClick={handleDelete}>
                Удалить
            </button>
        </div>
    )
}