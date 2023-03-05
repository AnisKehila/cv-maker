import React from 'react'
import EducationItem from './EducationItem'
export default function Education({education}) {
    return (
        <div className='education-container'>
            <h3 className='title'>Education</h3>
            <ul>
                {education.map(item => 
                    <EducationItem 
                        from= {item.from}
                        to= {item.to}
                        schoolName= {item.schoolName}
                        subject= {item.subject}
                        degree= {item.degree}
                        key= {item.key}
                    />
                )}
            </ul>
        </div>
    )
}
