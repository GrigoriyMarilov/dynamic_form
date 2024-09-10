import {useDynamicFormStore} from "./useDynamicFormStore.ts";
import {FormField} from "./formField.tsx";
import {FormEvent, useState} from "react";
import {FormData} from "./types.ts";
import {Dialog} from "../dialog/dialog.tsx";


export const DynamicForm = () => {
    const formFields = useDynamicFormStore(state => state.formFields)
    const [formData, setFormData] = useState<FormData[]>([])
    const [isDialog, setIsDialog] = useState(false)
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFormData(formFields.map(component => {
            return {
                id: component.id,
                type: component.type,
                label: component.label,
                value: component.value
            }
        }))
        setIsDialog(true)
    }

    if (formFields.length < 1) {
        return (
            <div className={"dynamic_form"}>
                Форма пока пустая
            </div>
        )
    } else {
        return (
            <>

                <form className={"dynamic_form"} onSubmit={handleSubmit}>
                    {
                        formFields.map(component => {
                            return (
                                <FormField component={component} key={component.id}/>
                            )
                        })
                    }
                    <button type={"submit"} className={"dynamic_form__submit"}>Submit</button>
                </form>

                <Dialog isDialog={isDialog} setIsDialog={setIsDialog}>

                    {formData.map(data => (
                        <div key={data.id}>
                            {JSON.stringify(data)
                                .split(/([{},])/g)
                                .map((part, index) => (
                                    <span key={index}>
                                        {part === "}" && <><br/>{part},<br/></>}
                                        {part !== "}" && (
                                            <>
                                                {part}
                                                {(part === "," || part === "{") && <br/>}
                                            </>
                                        )}
                                     </span>
                                ))}
                        </div>
                    ))}

                </Dialog>
            </>
        )
    }

}