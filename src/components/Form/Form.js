import React from 'react'
import UserInfo from './FormItems/UserInfo'
import Education from './FormItems/Education'
import Experience from './FormItems/Experience'

export default function Form(
    {
        langClickHandler,
        handleInfoChange,
        cv,
        handleLangChange,
        removeLangHandler,
        changeExpHandler,
        removeHandler,
        addExpHandler
    }
    ) {
    return (
        <div className='form-container'>
            <UserInfo 
                handleInfoChange = {handleInfoChange} 
                personalInfo = {cv.personalInfo} 
                handleLangChange = {handleLangChange}
                removeLangHandler = {removeLangHandler}
                langClickHandler = {langClickHandler} 
            />
            <Experience 
                experience = {cv.experience}
                removeHandler = {removeHandler}
                changeExpHandler = {changeExpHandler}
                addExpHandler = {addExpHandler}
            />
            <Education 
                experience = {cv.education}
                removeHandler = {removeHandler}
            />
        </div>
    )
}
