import React from 'react'
import ExperienceItem from './ExperienceItem';

export default function Experience({experience, changeExpHandler, removeHandler, addExpHandler}) {
    return (
        <div className='exp-container'>
            <h3>Experience</h3>
            {experience.map(exp => 
                <ExperienceItem
                    changeExpHandler = {changeExpHandler}
                    removeHandler = {removeHandler}
                    key = {exp.key}
                    from  = {exp.from}
                    to = {exp.to}
                    companyName = {exp.companyName}
                    jobPosition = {exp.jobPosition}
                    id = {exp.key}
                />
            )}
            <input type='button' className='add' value= 'Add Experience' onClick={addExpHandler}/>
        </div>
    )
}
