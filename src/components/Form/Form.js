import React from 'react'
import UserInfo from './FormItems/UserInfo'
import Education from './FormItems/Education'
import Experience from './FormItems/Experience'

export default function Form({handleInfoChange}) {
    return (
        <div className='form-container'>
            <UserInfo handleInfoChange = {handleInfoChange}/>
            <Experience />
            <Education />
        </div>
    )
}
