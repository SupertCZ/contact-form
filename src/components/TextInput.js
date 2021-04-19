import { Messages } from "../Translation";

//Implementace si nevyžaduje žádné jiné typy fieldů
function TextInput({fieldName, value, onInput, isTextArea}) {
    return (
    <div className="form-group">
        <label htmlFor={fieldName}>{Messages[fieldName]}</label>
        {isTextArea?
            <textarea 
                id={fieldName} 
                name={fieldName} 
                onInput={onInput} 
                value={value}
            /> :
            <input 
                id={fieldName} 
                name={fieldName} 
                value={value} 
                onInput={onInput} 
            />}
    </div>
    )
}

export default TextInput;