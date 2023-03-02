import React, { useState } from 'react'
import Form from "./Form/Form";
import Cv from "./CV/Cv"
import cvData from './cvData';

export default function Main() {
    const [cv , setCvData] = useState(cvData);
    function handleInfoChange(e) {
        const name = e.target.id
        if(name === 'img') {
            handleImageChange(e);
            return
        }
        setCvData((prevState) => (
            {
                ...prevState,
                personalInfo : {
                    ...prevState.personalInfo,
                    [name] : e.target.value 
                }
            }
        ))
    }
    function handleImageChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setCvData((prevState) => (
                {
                    ...prevState,
                    personalInfo : {
                        ...prevState.personalInfo,
                        img : reader.result
                    }
                }
            ))
        }
    }
    return (
        <main>
            <Form handleInfoChange = {handleInfoChange} />
            <Cv cv = {cv}/>
        </main>
    )
}
