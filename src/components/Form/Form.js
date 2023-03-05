import React , {useRef} from 'react'
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
        addExpHandler,
        addEducationHandler,
        changeEduHandler,
        loadExample,
        generatePdf,
        resetExample
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
                education = {cv.education}
                removeHandler = {removeHandler}
                changeEduHandler = {changeEduHandler}
                addEducationHandler = {addEducationHandler}
            />
            <input type='button' value='Generate PDF' className='generate' onClick={generatePdf}/>
            <input type='button' className='load-example' value='Load Example' onClick={loadExample} />
            <input type='button' className='reset' value='Reset' onClick={resetExample} />
        </div>
    )
}
