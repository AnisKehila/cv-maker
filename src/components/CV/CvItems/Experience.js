import React from 'react'
import ExperienceItem from './ExperienceItem'

export default function Experience({experience}) {
    return (
        <div className='experience-container'>
            <h3 className='title'>Experience</h3>
            <ul>
                {experience.map(exp => 
                    <ExperienceItem 
                        from = {exp.from}
                        to = {exp.to}
                        companyName = {exp.companyName}
                        jobPosition = {exp.jobPosition}
                        key = {exp.key}
                        id = {exp.key}
                    />
                )}
            </ul>
        </div>
    )
}
