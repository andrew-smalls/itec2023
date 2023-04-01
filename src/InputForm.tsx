import {useState} from "react";

export type InputFormProps = {
    setTheme:(string) => void;
    setPoem: (string) => void;
    setImageURL: (string) => void;
}
export function InputForm({setTheme, setPoem, setImageURL}: InputFormProps) {
    const [prompt, setPrompt] = useState("");
    function handleSubmit(event) {
        console.log("Entered: ", prompt);
        // send to server
        // on response, update content and update image
        // setPrompt
        // setTheme here
    }

    function handleChange(event) {
        setPrompt(event.target.value);
    }

    return <form>
        <input type="text" placeholder="Type your prompt here..." onChange={handleChange} className={"inputPrompt"}/>
        <input type="submit" value="Generate" onClick={handleSubmit} className={"generateButton"}/>
    </form>
}