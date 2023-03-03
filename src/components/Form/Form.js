import React from 'react'
import UserInfo from './FormItems/UserInfo'
import Education from './FormItems/Education'
import Experience from './FormItems/Experience'

export default function Form({langClickHandler, handleInfoChange, cv, handleLangChange, removeLangHandler}) {
    return (
        <div className='form-container'>
            <UserInfo 
                handleInfoChange = {handleInfoChange} 
                personalInfo = {cv.personalInfo} 
                handleLangChange = {handleLangChange}
                removeLangHandler = {removeLangHandler}
                langClickHandler = {langClickHandler} 
            />
            <Experience />
            <Education />
        </div>
    )
}
