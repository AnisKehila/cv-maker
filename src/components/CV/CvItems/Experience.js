import React from 'react'
import ExperienceItem from './ExperienceItem'

export default function Experience() {
    return (
        <div className='experience-container'>
            <h3 className='title'>Experience</h3>
            <ul>
                <ExperienceItem from='2016' to='2018' companyName='Algerie Telecom' jobPosition = 'UI/UX Designer'/>
                <ExperienceItem from='2018' to='2020' companyName='Mobilis' jobPosition = 'Front End Developer'/>
                <ExperienceItem from='2018' to='Present' companyName='Mobilis' jobPosition = 'Server Side Engineer'/>
            </ul>
        </div>
    )
}
