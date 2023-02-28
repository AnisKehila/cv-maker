import React from 'react'
import CvHeader from './CvItems/CvHeader'
import Education from './CvItems/Education'
import Experience from './CvItems/Experience'
import SideBar from './CvItems/SideBar'
import Description from './CvItems/Description'
export default function Cv() {
    return (
        <div className='cv-container'>
            <SideBar />
            <div className='cv-content'>
                <CvHeader />
                <Description />
                <Experience />
                <Education />
            </div>
        </div>
    )
}
