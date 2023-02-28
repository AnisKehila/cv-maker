import React from 'react'
import Education from './CvItems/Education'
import Experience from './CvItems/Experience'
import UserInfo from './CvItems/UserInfo'

export default function Cv() {
    return (
        <div className='cv-container'>
            <UserInfo />
            <div className='cv-content'>
                <Experience />
                <Education />
            </div>
        </div>
    )
}
