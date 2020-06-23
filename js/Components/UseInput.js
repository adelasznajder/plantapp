import {useState} from "react";

export const handleChange = (valueOnStart) => {
    const [value, setValue] = useState(valueOnStart);

    return [
        value,
        {
            value,
            onChange: e => {
                setValue(e.target.value);
            }
        }
    ]
};