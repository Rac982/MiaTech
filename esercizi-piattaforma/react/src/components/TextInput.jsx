import { useState } from "react";

const TextInput = () => {
    const [textInput, setTextInput] = useState("");

    const handleChange = (event) => {
        setTextInput(event.target.value);
    };

    return (
        <input type="text" value = {textInput} onChange={handleChange} placeholder="Scrivi qualcosa..." />
    );
};

export default TextInput;