import './css/App.css';
import TextInput from './components/TextInput';
import { useState } from 'react';
import { Messages } from './Translation';

const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const telephoneRegex = new RegExp(/(\+[0-9]{1,3})*([0-9]{9})/);

const defFormData = {
    name: "",
    email: "",
    telephone: "",
    message: "",
    formSending: false,
    formValid: false
};

function App() {

    const [formData, setFormData] = useState(defFormData)

    const onInput = (e) => {
        const finalData = {...formData, [e.target.id]: e.target.value};

        if (!finalData.message ||
            (finalData.telephone && !finalData.telephone.match(telephoneRegex)) || (finalData.email && !finalData.email.match(emailRegex)) || 
            (!finalData.telephone && !finalData.email)) {
            finalData.formValid = false;
        } else finalData.formValid = true;
        
        setFormData(finalData);
    }

    const ValidateAndSend = async (e) => {
        e.preventDefault();

        setFormData({...formData, formSending: true});

        await new Promise(resolve => setTimeout(resolve, 3000));

        if (formData.email === "neexistujici@email.cz") {
            alert(Messages.unknownEmail);
            return;
        } else {
            console.log(formData);
            
            setFormData(defFormData);
            alert(Messages.success);
        }

        

        
    }


    return (
        <>
            <h1>Kontaktní formulář</h1>
            <form onSubmit={ValidateAndSend}>
                <TextInput value={formData.name} fieldName={"name"} onInput={onInput}  />
                <TextInput value={formData.email} fieldName={"email"} onInput={onInput}  />
                <TextInput value={formData.telephone} fieldName={"telephone"} onInput={onInput}  />
                <TextInput value={formData.message} fieldName={"message"} onInput={onInput} isTextArea={true} />
                <button type="submit" disabled={formData.formSending||!formData.formValid}>Odeslat formulář</button>
            </form>
        </>
        
    );

}

export default App;
