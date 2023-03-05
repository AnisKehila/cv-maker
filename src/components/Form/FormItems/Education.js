import React from 'react'
import EducationItem from './EducationItem'
export default function Education({education, changeEduHandler, removeHandler, addEducationHandler}) {
    return (
        <div className='education-container'>
            <h3>Education</h3>
            {education.map(item => 
                <EducationItem
                    changeEduHandler = {changeEduHandler}
                    removeHandler = {removeHandler}
                    key = {item.key}
                    from  = {item.from}
                    to = {item.to}
                    schoolName = {item.schoolName}
                    subject = {item.subject}
                    degree = {item.degree}
                    id = {item.key}
                />
            )}
            <input type='button' className='add' value= 'Add Education' onClick={addEducationHandler}/>
        </div>    )
}
