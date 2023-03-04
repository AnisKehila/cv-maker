import React, { useState } from 'react'
import Form from "./Form/Form";
import Cv from "./CV/Cv"
import cvData from './cvData';
import { v4 as uuidv4 } from "uuid";

export default function Main() {
    const [cv , setCvData] = useState(cvData);
    function handleInfoChange(e) {
        const name = e.target.name;
        if(name === 'language-name' || name === 'language-lvl') {
            handleLangChange(e);
            return
        }
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
    function handleLangChange(e) {
        setCvData((prevState) => {
            let newLangs = prevState.personalInfo.langs;
            newLangs = newLangs.map(lang => {
                if(e.target.id == lang.id) {
                    return {...lang, [e.target.name] : e.target.value}
                }
                return lang
            })
            return (
                {
                    ...prevState,
                    personalInfo : {
                        ...prevState.personalInfo,
                        langs : newLangs
                    }
                }
            )
        })
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
    function removeLangHandler(e) {
        setCvData((prevState) => {
            let newLangs = prevState.personalInfo.langs;
            newLangs = newLangs.filter(lang => e.target.id == lang.id ? false : lang )
            return (
                {
                    ...prevState,
                    personalInfo : {
                        ...prevState.personalInfo,
                        langs : newLangs
                    }
                }
            )
        })
    }
    function langClickHandler() {
        setCvData((prevState) => {
            return (
                {
                    ...prevState,
                    personalInfo : {
                        ...prevState.personalInfo,
                        langs : [...prevState.personalInfo.langs, {lang: '', lvl: '', id: uuidv4()}]
                    }
                }
            )
        })
    }
    function changeExpHandler(e) {
        setCvData((prevState) => {
            let newExp = prevState.experience;
            newExp = newExp.map(exp => 
                exp.key == e.target.id ? {...exp, [e.target.name]: e.target.value}: exp
            )
            return (
                {
                    ...prevState,
                    experience : newExp
                }
            )
        })
    }
    function removeHandler(e) {
        setCvData((prevState) => {
            const name = e.target.name
            let newArr = prevState[name];
            newArr = newArr.filter(item => 
                item.key == e.target.id ? false : item
            )
            return (
                {
                    ...prevState,
                    [name] : newArr
                }
            )
        })
    }
    function addExpHandler(e) {
        setCvData((prevState) => {
            let newExp = prevState.experience;
            newExp.push({from: '', to: '', companyName: '', jobPosition: '', key: uuidv4()});
            return (
                {
                    ...prevState,
                    experience : newExp
                }
            )
        })
    } 
    return (
        <main>
            <Form
                handleInfoChange = {handleInfoChange}
                cv = {cv} 
                handleLangChange = {handleLangChange}
                removeLangHandler = {removeLangHandler}
                langClickHandler = {langClickHandler}
                changeExpHandler = {changeExpHandler}
                removeHandler = {removeHandler}
                addExpHandler = {addExpHandler}
            />
            <Cv cv = {cv}/>
        </main>
    )
}
