import React from 'react'
import EducationItem from './EducationItem'
export default function Education() {
    return (
        <div className='education-container'>
            <h3 className='title'>Education</h3>
            <ul>
                <EducationItem from='2010' to='2013' schoolName= 'University Mhamed Bouguerra, Boumerdes' subject='Computer Science' degree='Lisence'/>
                <EducationItem from='2013' to='2015' schoolName= 'University Mhamed Bouguerra, Boumerdes' subject='Computer Science' degree='Master'/>
                <EducationItem from='2015' to='2018' schoolName= 'University Mhamed Bouguerra, Boumerdes' subject='Art' degree='Lisence'/>
            </ul>
        </div>
    )
}
